/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbd85f28ff831ae5b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ad4eabbcc58b5b455c08e12f8263f060',
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2iug6ZZlpvwfJy6uxowlsLHYX0g',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GB2adoguvo09NUYpTMYHyXbHWc7c48PV3gEYPJT_V-A',
        PROVINCE: '内蒙古',
        CITY: '呼和浩特',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-26',
      horoscopeDateType: '水瓶座',
      openUrl: 'https://wangxinleo.cn',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '瑶宝', year: '1999', date: '02-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '瑶瑶', year: '1999', date: '02-26',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '03-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-03-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      name: '自己',
      id: 'o2iug6Sx0IQXXCPhgPDDXJZrwSsc',
      useTemplateId: 'GB2adoguvo09NUYpTMYHyXbHWc7c48PV3gEYPJT_V-A',
      province: '广东',
      city: '广州',
      horoscopeDate: '10-10',
      horoscopeDateType: '天秤',
      openUrl: 'https://wangxinleo.cn',
   festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '自己', year: '1994', date: '09-06',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '自己', year: '1994', date: '10-10',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '03-19',
        },
      ],
      customizedDateList: [ // 在一起的日子
        { keyword: 'love_day', date: '2022-03-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },],
      courseSchedule: null
    }
    
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'O_VRGMhhanmZQds1JpKsU6YYl9fM3nwmqi5uxJ2ENx4',

  CALLBACK_USERS: [
  {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2iug6Sx0IQXXCPhgPDDXJZrwSsc',
    }，
     {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2iug6Sx0IQXXCPhgPDDXJZrwSsc',
    }，  
],
   

module.exports = USER_CONFIG

