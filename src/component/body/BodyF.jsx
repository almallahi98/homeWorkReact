import {React,useState,useEffect} from 'react';
import { SimpleGrid,Box, Center, Input } from '@chakra-ui/react';
import Card from '../../component/Card';


function BodyF() {
    
    const [MainObj, setMainObj] = useState({arr:[],SerchBox:""})
    useEffect(() => {
        setMainObj({...MainObj,arr:arr})
    console.log(MainObj)
    }, [])
    
    const arr = [
      {
        key:0,
        title: "تطوير تطبيقات iOS باستخدام SwiftUI",
        text: "برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple",
        imgHolder: window.location.origin + "/images/bf4e8496-e8f3-4e4e-af20-05418aba18ed.png",
        flag: false,
        status:"التسجيل مغلق",
      },
      {
        key:1,
        title: "دورة تصميم المواقع بمنهجية No-Code",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, ea nisi magni optio accusantium delectus eum a impedit nobis aut est veniam deserunt? Quasi alias accusantium non ad illo eligendi.",
        imgHolder:"/images/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png",
        flag: false,
        status:"التسجيل مغلق",
      },
      {key:2,
        title: "UI/UX من البداية حتى الاتقان باستخدام Figma",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsam debitis odit hic quod quas culpa reprehenderit velit architecto saepe odio cum dolor, doloribus, magni dolorum officiis, provident quo eum",
        imgHolder: "/images/67f4b33c-1aa4-4c23-a18d-b12c0cf924d4.png",
        flag: false,
        status:"التسجيل مغلق",
      },
      { key:3,
        title: "تطوير تطبيقات iOS باستخدام SwiftUI",
        text: "برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple",
        imgHolder: window.location.origin + "/images/bf4e8496-e8f3-4e4e-af20-05418aba18ed.png",
        flag: false,
        status:"التسجيل مغلق",
      },
      {
        key:4,
        title: "تطوير تطبيقات iOS باستخدام SwiftUI",
        text: "برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple",
        imgHolder: window.location.origin + "/images/bf4e8496-e8f3-4e4e-af20-05418aba18ed.png",
        flag: false,
        status:"التسجيل مغلق",
      },
    ];
    
  return (
    
    <Box mt={"15px"}>
      <Center bg="blackAlpha.200">
        <Box mt={15}>
          <Input
            type={"text"}
            onChange={(e) => {
              setMainObj({...MainObj,SerchBox:e.target.value,arr:arr.filter((elm)=>
                {
                    return elm.title.toLocaleLowerCase().includes(e.target.value);

                })});
              
              console.log(MainObj);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                //console.log("ُfrom KeyDown: Enter");
                // search function here
                
                console.log(MainObj);
              }
            }}
            w="100%"
            placeholder={"  Search"}
            bg={"white "}
            my={5}
          />
        </Box>
      </Center>
      <Box bg="grey.500">
        <SimpleGrid columns={[1, 2, 3, 4]} gap={2}>
          {MainObj.arr.map((r) => {
            {
                return (
                <Card
                  key={r.key}
                  imgHolder={r.imgHolder}
                  title={r.title}
                  text={r.text}
                  flag={r.flag}
                  status={r.status}
                />
              );
            }
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default BodyF