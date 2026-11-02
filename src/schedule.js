export function availableSlots(events, members, date) {
  return Array.from({length:13},(_,i)=>i+9).filter(hour=>members.every(member=>!events.some(e=>e.date===date&&e.members.includes(member)&&hour<e.end&&hour+1>e.start)));
}
export function dateKey(year, month, day) {return `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;}
