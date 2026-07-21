export function normalizeCustomerProfile(customer={}){
  const sessionsTotal=Math.max(0,Number(customer.sessionsTotal||0));
  const sessionsRemaining=customer.sessionsRemaining==null
    ? sessionsTotal
    : Math.min(sessionsTotal||Number(customer.sessionsRemaining||0),Math.max(0,Number(customer.sessionsRemaining||0)));
  return {
    phone:String(customer.phone||""),
    goal:String(customer.goal||""),
    coachNote:String(customer.coachNote||""),
    sessionsTotal,
    sessionsRemaining,
    profileStatus:String(customer.profileStatus||"active")
  };
}

export function createCustomerRecord(input={}){
  return {
    id:String(input.id||""),
    name:String(input.name||"สมาชิก").trim(),
    code:String(input.code||"").trim(),
    phone:String(input.phone||"").trim(),
    goal:String(input.goal||"").trim(),
    coachNote:String(input.coachNote||"").trim(),
    startDate:String(input.startDate||""),
    startDateISO:String(input.startDateISO||""),
    subscriptionMonths:Math.max(1,Number(input.subscriptionMonths||1)),
    sessionsTotal:Math.max(0,Number(input.sessionsTotal||0)),
    sessionsRemaining:Math.max(0,Number(input.sessionsTotal||0)),
    profileStatus:"active",
    createdAt:new Date().toISOString(),
    createdBy:"trainer"
  };
}
