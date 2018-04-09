import React, { Component } from 'react';
import Event from './Event'
import './Container.css'

class Container extends Component {

  sortEvents(events) {
    var t = Object.values(events).sort(function(a, b) {
      return a.start - b.start || a.end - b.end
    });

    return t
  }

  setPosition(events) {
    var overlapMap = {}

    for(var i = 0; i < events.length; i++) {
      events[i].width = 100

      overlapMap[i] = []
      for(var j = 1; j < events.length; j++) {
        if(i === j){ continue }
        if((events[i].start < events[j].end && events[i].end > events[j].end) ||
          (events[i].start < events[j].start && events[i].end > events[j].end) ||
          (events[i].start < events[j].start && events[i].end > events[j].start)) {
          overlapMap[i].push(j)
        }
      }
    }

    this.getWidth(events, overlapMap)

    return events
  }

  getWidth(events, eventsMap) {
    var isMapped = {}

    Object.keys(eventsMap).forEach(function (key){
      var eventItem = eventsMap[key]
      var eventCount = eventItem.length + 1
      var pastOverlap = key > eventItem[0]
      // if the child overlapping element overlaps more elements than the parent,
      // conform to the width that is smaller
      if(!pastOverlap) {
        eventItem.map(x => eventCount = Math.max(eventCount, eventsMap[x].length + 1))
      }

      var width = events[key].width
      events[key].width = Math.min(100 / eventCount, width)
      // if the element has been placed already and is
      // not the first element in its overlapping stack, don't set to auto
      if (!isMapped[key] || pastOverlap) {
        events[key].left = 'auto'
      }

      var count = 1
      for(var i = 0; i < eventItem.length; i++) {
        isMapped[eventItem[i]] = true
        events[eventItem[i]].width = Math.min(events[key].width, events[eventItem[i]].width)

        if(events[eventItem[i-1]] != null && events[eventItem[i]].start >= events[eventItem[i-1]].end){
          // events can spread out since they aren't overlapping each other
          events[key].width = 100 / --eventCount
          events[eventItem[i]].width = events[key].width
          events[eventItem[i-1]].width = events[key].width

          events[eventItem[i]].left = ((events[eventItem[i]].width / 100) * 100)
          events[eventItem[i-1]].left = events[eventItem[i]].left
          // retain max left position
        } else if(events[eventItem[i]].left != null){
          if(pastOverlap && events[key].left == 'auto') {
            events[key].left = 0
          }
          events[key].left = Math.max(events[key].left, ((events[key].width / 100) * 100) * count++)
        }else {
          events[eventItem[i]].left = ((events[eventItem[i]].width / 100) * 100) * count++
        }

        // event fills rest of space to next event
        if (events[key].width > events[eventItem[i]].width) {
          events[key].width = 100 - events[eventItem[i]].width
        }
      }
    })
  }

  render() {
    var sortedEvents = this.sortEvents(this.props.events)
    var positionedEvents = this.setPosition(sortedEvents).map(x => <Event key={Date.now() * 1000 * Math.random(1000)} start={x.start} end={x.end} width={x.width} left={x.left}/>)

    return (
      <div className='ContainerBox'>
        <div className='Container'>
          {positionedEvents}
        </div>
      </div>
    );
  }
}

export default Container;
