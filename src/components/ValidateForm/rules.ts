
const patterns = {
  email: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
  phoneNo: /^1[3456789]\d{9}$/,
  userName: /.*[\u4e00-\u8fa5]+.*$/ // 是否包含中文
}
export type RuleTypes = 'email' | 'phoneNo' | 'userName'

// const validEmail = function (input: string) {
//   // 邮箱验证规则，以字母或数字开头，中间可以是字母数字下划线或者-
//   const pattern = /^([a-zA-Z\d_\-])+@[a-zA-Z\d]+\.[a-zA-Z]{2, 4}$/
//   return pattern.test(input)
// }

// const validPhoneNo = function (input: string) {
//   const pattern = /^1[3456789]\d{9}$/
//   return pattern.test(input)
// }
export default function validateByType (input: string, type:RuleTypes): boolean {
  const pattern = patterns[type]
  return pattern.test(input)
}
