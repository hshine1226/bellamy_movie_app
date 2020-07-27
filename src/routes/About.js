import React from "react";
import "./About.scss";

function About(props) {
    console.log(props)
    return (
    <div className="about">         
        <div className="about__img">
            <img src="https://lh3.googleusercontent.com/7M9eqYXapPJjKZhgz8saTnArUNiuZqS-aK7xEtpCzFFnq8BbiVXjbWCCQXgRe-XpuFQhtsyQKHE7fMYuOdbHJvz7TSkIhu_fwCfAAZyaxwKozOuWacocOMBRAiWFl4iksmps3q-Ly6Ue5pIH3BggfbpmS-DG-4OiBKNz0033PTro29s_6Jlo86jbnRh1IxsggnZ8DLyDrtM8EXljYyql4rqI_NfYGNYbRgwsVaZ8-Ja_Fr2cX8gbFHXocg3m-FL_Q1k-DaSBV4F-4zFHuQMzNxj6UDDBRldPPki3NYMD_ek69iem9nWIeqsN_oaS36d4kngLhAlxRVMbCIWsn1ZMToldn61sIvbPOug3kT-DBm24kssYBR5zRsZpfZLa3zsSJsIRgFEXyDBrwWoFHRI3s3nAo6JYk35swU1K_Qu8AFj1Ap9qi3bw9uFYRKcEM1ZiNoOLF0IxVrqRYqqnDiHoSgvhHV3HSC-F6DV--10yCmbVxMag9IYw_FDcoidFhvYiXukrcvUEupW0CcMEiJf_0E_JVtVQ4uAKik46iU2qi42YwBmAMTOD3VTGHnL_kb_0_AC7h9-EWTeoRd8PmTn0gJcqAjA3D6PPgQTDGUAzMgWGoVDe0SIWLVMiGtHW_gOvLjxnedYzS3SX7fnTDKMWa8r6zF-ZEckMEX9fT0FR3M6MbkP5PW741lg0A-cH0XI=s919-no?authuser=0"></img>
        </div>       
        <div className="about__title">
            <h3>ABOUT ME</h3>
        </div>
        <div className="about__icons">            
            <div className="icon icon__github">
                <a href="https://github.com/hshine1226">    
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <div className="icon icon__insta">
                <a href="https://www.instagram.com/__junhyuk__choi/">
                    <i class="fab fa-instagram-square"></i>
                </a>
            </div>
            <div className="icon icon__blog">
                <a href="https://medium.com/@hshine1226">
                    <i className="fab fa-blogger"></i>
                </a>
            </div>
        </div>
        <div className="about__info">
            <span>Click this icons</span>
            <span>then, you can go to My SNS Page</span>
        </div>
        <div className="about__descrption">
            <span>리액트로 만든 첫번째 앱입니다.</span>
            <span>컴포넌트를 생성하고 사용하는 방법, </span>
            <span>라우터와 라우트를 통한 페이지 이동을 공부했습니다.</span>
        </div>       
    </div>
    )
}

export default About;