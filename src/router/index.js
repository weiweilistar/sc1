import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/pages/student/index'
import StudentInfo from '@/pages/student/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/student',
      component: Student,
      children:[{
      	path: 'info',// 路径拼接/student/info
      	component: StudentInfo,
      }]
    }/*,
    {
      path: '/course',
      component: Course,
      children:[{
      	path: 'info',
      	component: CourseInfo,
      }]
    }*/
  ]
})
