import React, { Component } from 'react';
import { Grid } from '@chakra-ui/react';
import Card from '../../component/Card';


export class Body extends Component {
  render() {
    return (
      <Grid templateColumns="repeat(3, 1fr)" gap={6} padding="50">
        <Card imgHolder="https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png" title="دورة Git and Github" text="علم أساسيات إدارة مشروعك باستخدام Github والذي يستخدم على نطاق واسع من قبل المطورين من جميع أنحاء العالم."
        flag={true} 
        status={"التسجيل متاح"}/>
        <Card imgHolder={ window.location.origin+"/images/img1.png"} title="تطوير تطبيقات iOS باستخدام SwiftUI" text="برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple"
         flag={false}
         status={"التسجيل مغلق"}/>
        <Card imgHolder="../../images/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png" title="دورة تصميم المواقع بمنهجية No-Code" text="ستهدف في هذه الدورة الراغبين بتعلم تصميم مواقع الويب من الصفر لتطوير مهاراتهم عن طريق مجموعة من التدريبات العملية والممتعة."
        flag={false}
        status={"التسجيل مغلق"}
        />
        <Card imgHolder="../../images/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png" title="UI/UX من البداية حتى الاتقان باستخدام Figma" text="دورة UI/UX نبدأ بأساسيات UI حتى مراحل الإتقان باستخدام Figma"
        flag={false}
        status={"التسجيل مغلق"}
        />
        <Card imgHolder="../../images/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png" title="معسكر تطبيقات الويب للناشئين" text="يهدف المعسكر إلى تطوير الناشئ في مجال تطبيقات الويب باستخدام لغة JavaScript بدايةً من تعلم أساسيات تطبيقات الويب إلى أن يصل إلى بناء مشروع."
        flag={false}
        status={"التسجيل مغلق"}/>
      </Grid>
    );
  }
}

export default Body