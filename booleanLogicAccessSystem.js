let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let access = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside
    ? "Secure"
    : "Unsafe";

console.log(access);

isDoorLocked = false;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = true;

access = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside
    ? "Secure"
    : "Unsafe";

console.log(access);
