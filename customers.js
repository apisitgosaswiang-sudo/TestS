export function normalizeCustomerProfile(customer={}){
  return {
    phone:String(customer.phone||""),
    goal:String(customer.goal||""),
    coachNote:String(customer.coachNote||""),
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
    profileStatus:"active",
    createdAt:new Date().toISOString(),
    createdBy:"trainer"
  };
}
