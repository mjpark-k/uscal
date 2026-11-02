import {test} from 'node:test';
import assert from 'node:assert/strict';
import {availableSlots,dateKey} from './schedule.js';
test('공통 시간은 모든 참여자의 겹치는 일정을 제외한다',()=>{
const events=[{date:'2026-11-02',start:9,end:11,members:['me']},{date:'2026-11-02',start:10,end:12,members:['friend']}];
assert.deepEqual(availableSlots(events,['me','friend'],'2026-11-02'),[12,13,14,15,16,17,18,19,20,21]);
assert.ok(availableSlots(events,['me'],'2026-11-03').includes(9));
});
test('월과 날짜를 달력 키로 변환한다',()=>assert.equal(dateKey(2026,0,3),'2026-01-03'));
