import { FunctionComponent } from "react";

const CHATBOTLANDINGPAGEDESIGN: FunctionComponent = () => {
  return (
    <div className="relative bg-base-white w-full overflow-hidden flex flex-col items-start justify-start gap-[120px] text-center text-29xl text-neutral-500 font-headline-headline-2-medium">
      <div className="self-stretch flex flex-col items-start justify-start gap-[80px] text-xl">
        <div className="self-stretch flex flex-col items-center justify-start relative">
          <div className="w-[1440px] bg-base-white flex flex-row items-center justify-between py-10 px-20 box-border z-[0] font-body-medium-regular">
            <div className="flex flex-row items-center justify-start gap-[8px] text-left">
              <img
                className="w-7 relative h-7 overflow-hidden shrink-0 hidden"
                alt=""
                src="/logo.svg"
              />
              <b className="relative leading-[140%]">Built for AI</b>
            </div>
            <div className="rounded-81xl bg-base-white flex flex-row items-start justify-center gap-[40px] text-base text-neutral-5001">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-medium">About</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <div className="relative leading-[160%] font-medium">
                  Resources
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon--caretdown.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-medium">
                  Pricing
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-medium">
                  Reviews
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px] text-sm font-headline-headline-2-medium">
              <div className="rounded-81xl bg-neutral-50 box-border h-[42px] overflow-hidden flex flex-row items-center justify-center py-3 px-6 border-[1px] border-solid border-gray-800">
                <div className="relative leading-[160%] font-semibold">
                  Log In
                </div>
              </div>
              <div className="rounded-81xl bg-mediumseagreen h-[42px] overflow-hidden flex flex-row items-center justify-center py-3 px-6 box-border text-base-white">
                <div className="relative leading-[160%] font-semibold [text-shadow:0px_-0.5px_1px_rgba(0,_0,_0,_0.2),_0px_-0.5px_1px_rgba(0,_0,_0,_0.05)]">
                  Register
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[23px] absolute !m-[0] top-[47px] left-[50px] h-[28.2px] z-[1]"
            alt=""
            src="/vector.svg"
          />
          <div className="w-[1440px] bg-base-white h-[840px] flex flex-col items-start justify-start py-24 px-16 box-border relative gap-[10px] z-[2] text-xs text-primary-700">
            <div className="w-[720px] flex flex-col items-start justify-center gap-[40px] z-[0]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[48px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="rounded-81xl bg-primary-50 box-border h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-4 gap-[8px] border-[1px] border-solid border-darkgray-100">
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/frame.svg"
                    />
                    <div className="relative leading-[160%] font-semibold">
                      Your Virtual Chat Partner
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-45xl text-neutral-500">
                    <div className="self-stretch relative leading-[120%] font-medium">
                      Transform Every Interaction with Our Smart AI Chatbot
                    </div>
                    <div className="self-stretch relative text-lg leading-[160%] text-neutral-300">
                      <p className="m-0">
                        Our AI chatbot provides personalized interactions,
                        automates routine tasks,
                      </p>
                      <p className="m-0">
                        and ensures seamless communication around the clock.
                        Elevate your user
                      </p>
                      <p className="m-0">
                        experience with cutting-edge technology today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[24px] text-sm text-base-white">
                  <div className="rounded-81xl bg-mediumseagreen h-14 overflow-hidden flex flex-row items-center justify-center py-3 px-8 box-border">
                    <div className="relative leading-[160%] font-semibold [text-shadow:0px_-0.5px_1px_rgba(0,_0,_0,_0.2),_0px_-0.5px_1px_rgba(0,_0,_0,_0.05)]">
                      Try for Free
                    </div>
                  </div>
                  <div className="rounded-81xl bg-neutral-50 box-border h-14 overflow-hidden flex flex-row items-center justify-center py-3 px-8 text-neutral-500 border-[1px] border-solid border-gray-800">
                    <div className="relative leading-[160%] font-semibold">
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-left text-sm text-neutral-300">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-8 relative rounded-81xl h-8 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className="w-8 relative rounded-81xl h-8 overflow-hidden shrink-0 object-cover ml-[-8px]"
                    alt=""
                    src="/avatar1@2x.png"
                  />
                  <img
                    className="w-8 relative rounded-81xl h-8 overflow-hidden shrink-0 object-cover ml-[-8px]"
                    alt=""
                    src="/avatar2@2x.png"
                  />
                  <img
                    className="w-8 relative rounded-81xl h-8 overflow-hidden shrink-0 ml-[-8px]"
                    alt=""
                    src="/add.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[160%]">
                  <span>{`And `}</span>
                  <span className="font-semibold">100+ people</span>
                  <span>{` have tried `}</span>
                  <b>Built for AI</b>
                </div>
              </div>
            </div>
            <div className="w-[592px] absolute !m-[0] top-[0px] right-[64px] h-[800px] z-[1] text-left text-base text-base-white">
              <img
                className="absolute bottom-[0px] left-[calc(50%_-_296px)] w-[592px] h-[800px] object-contain"
                alt=""
                src="/image@2x.png"
              />
              <img
                className="absolute bottom-[0px] left-[calc(50%_-_296px)] w-[592px] h-[800px] object-cover"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="absolute top-[448px] left-[338px] shadow-[4px_2px_20px_1px_rgba(148,_148,_148,_0.06)] [backdrop-filter:blur(48px)] rounded-xl bg-gray-400 overflow-hidden flex flex-row items-center justify-start p-4 gap-[16px] border-[1px] border-solid border-gray-700">
                <div className="w-[52px] rounded-81xl bg-gray-600 box-border h-[52px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 border-[1px] border-solid border-gray-500">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/icon--headset.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative leading-[160%] font-semibold">
                    Multilingual Support
                  </div>
                  <div className="self-stretch relative text-xs leading-[160%] text-neutral-50">
                    Enabling users to interact
                  </div>
                </div>
              </div>
              <div className="absolute top-[572px] left-[48px] shadow-[4px_2px_20px_1px_rgba(148,_148,_148,_0.06)] [backdrop-filter:blur(48px)] rounded-xl bg-gray-400 overflow-hidden flex flex-row items-center justify-start p-4 gap-[16px] border-[1px] border-solid border-gray-700">
                <div className="w-[52px] rounded-81xl bg-gray-600 box-border h-[52px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 border-[1px] border-solid border-gray-500">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/icon--key.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative leading-[160%] font-semibold">
                    100% Secure
                  </div>
                  <div className="self-stretch relative text-xs leading-[160%] text-neutral-50">
                    Protect user data and privacy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] bg-mediumseagreen flex flex-col items-center justify-start py-12 px-20 box-border gap-[24px] z-[3] text-base text-base-white">
            <div className="self-stretch relative leading-[160%] font-medium">
              Trusted by
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-5 px-0 gap-[48px]">
              <img
                className="w-[202px] relative h-10 overflow-hidden shrink-0"
                alt=""
                src="/logo1.svg"
              />
              <img
                className="w-[166px] relative h-10 overflow-hidden shrink-0"
                alt=""
                src="/logo2.svg"
              />
              <img
                className="w-[164px] relative h-10 overflow-hidden shrink-0"
                alt=""
                src="/logo3.svg"
              />
              <img
                className="w-[166px] relative h-10 overflow-hidden shrink-0"
                alt=""
                src="/logo4.svg"
              />
              <img
                className="w-[220px] relative h-10 overflow-hidden shrink-0"
                alt=""
                src="/logo5.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-16 gap-[64px] text-29xl">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative leading-[140%] font-medium">
              <p className="m-0">Unlock the Power</p>
              <p className="m-0">of Intelligent Conversations</p>
            </div>
            <div className="self-stretch relative text-lg leading-[160%] text-neutral-300">
              Explore how our AI chatbot's advanced features seamlessly adapt to
              user queries
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[32px] text-left text-xl text-neutral-5001">
            <div className="w-[304px] shadow-[0px_2px_10px_rgba(34,_155,_85,_0.25)] rounded-2xl bg-base-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start p-8 gap-[32px] border-[1px] border-solid border-gray-700">
              <div className="rounded-81xl flex flex-row items-start justify-start p-1 border-[1px] border-solid border-mediumseagreen">
                <div className="w-14 rounded-81xl bg-mediumseagreen h-14 overflow-hidden shrink-0 flex flex-row items-center justify-center p-5 box-border">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/icon--usercircledashed.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative leading-[140%] font-semibold">
                  Good Experiences
                </div>
                <div className="self-stretch relative text-sm leading-[160%] font-body-medium-regular text-neutral-3001">
                  Our chatbot offers customizable options to tailor interactions
                  based on your specific needs.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-sm text-primary-500">
                <div className="relative leading-[160%] font-semibold">
                  Learn More
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon--arrowright.svg"
                />
              </div>
            </div>
            <div className="w-[304px] shadow-[0px_2px_10px_rgba(34,_155,_85,_0.25)] rounded-2xl bg-base-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start p-8 gap-[32px] border-[1px] border-solid border-gray-700">
              <div className="rounded-81xl flex flex-row items-start justify-start p-1 border-[1px] border-solid border-mediumseagreen">
                <div className="w-14 rounded-81xl bg-mediumseagreen h-14 overflow-hidden shrink-0 flex flex-row items-center justify-center p-5 box-border">
                  <img
                    className="w-9 relative h-9 overflow-hidden shrink-0"
                    alt=""
                    src="/icon--clock.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative leading-[140%] font-semibold">
                  24/7 Availability
                </div>
                <div className="self-stretch relative text-sm leading-[160%] font-body-medium-regular text-neutral-3001">
                  Our chatbot operates around the clock, providing instant
                  support and making your business accessible.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-sm text-primary-500">
                <div className="relative leading-[160%] font-semibold">
                  Learn More
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon--arrowright.svg"
                />
              </div>
            </div>
            <div className="w-[304px] shadow-[0px_2px_10px_rgba(34,_155,_85,_0.25)] rounded-2xl bg-base-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start p-8 gap-[32px] border-[1px] border-solid border-gray-700">
              <div className="rounded-81xl flex flex-row items-start justify-start p-1 border-[1px] border-solid border-mediumseagreen">
                <div className="w-14 rounded-81xl bg-mediumseagreen h-14 overflow-hidden shrink-0 flex flex-row items-center justify-center p-5 box-border">
                  <img
                    className="w-9 relative h-9 overflow-hidden shrink-0"
                    alt=""
                    src="/icon--money.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative leading-[140%] font-semibold">
                  Cost-Effective
                </div>
                <div className="self-stretch relative text-sm leading-[160%] font-body-medium-regular text-neutral-3001">
                  Our chatbot offers a cost-effective alternative to traditional
                  support channels, providing significant ROI.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-sm text-primary-500">
                <div className="relative leading-[160%] font-semibold">
                  Learn More
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon--arrowright.svg"
                />
              </div>
            </div>
            <div className="w-[304px] shadow-[0px_2px_10px_rgba(34,_155,_85,_0.25)] rounded-2xl bg-base-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start p-8 gap-[32px] border-[1px] border-solid border-gray-700">
              <div className="rounded-81xl flex flex-row items-start justify-start p-1 border-[1px] border-solid border-mediumseagreen">
                <div className="w-14 rounded-81xl bg-mediumseagreen h-14 overflow-hidden shrink-0 flex flex-row items-center justify-center p-5 box-border">
                  <img
                    className="w-9 relative h-9 overflow-hidden shrink-0"
                    alt=""
                    src="/icon--plugs.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative leading-[140%] font-semibold">
                  Seamless Integration
                </div>
                <div className="self-stretch relative text-sm leading-[160%] font-body-medium-regular text-neutral-3001">
                  Integrate our AI chatbot effortlessly with your existing
                  systems, websites, and applications.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-sm text-primary-500">
                <div className="relative leading-[160%] font-semibold">
                  Learn More
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon--arrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-0 px-16 gap-[48px] text-left">
        <div className="w-[646px] relative rounded-2xl bg-neutral-50 box-border h-[600px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-700">
          <div className="absolute top-[calc(50%_-_220px)] left-[calc(50%_-_243px)] [filter:drop-shadow(0px_-11.458792686462402px_50.24px_rgba(0,_0,_0,_0.1))_drop-shadow(0px_-33.494930267333984px_35.26px_rgba(255,_255,_255,_0.1))_drop-shadow(0px_72.27853393554688px_110.18px_rgba(0,_0,_0,_0.15))_drop-shadow(0px_32.61348342895508px_32.61px_rgba(0,_0,_0,_0.25))] w-[486px] h-[1000px]">
            <img
              className="absolute h-[99.32%] w-[97.47%] top-[0%] right-[1.22%] bottom-[0.68%] left-[1.31%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/body@2x.png"
            />
            <div className="absolute h-[99.34%] w-[97.57%] top-[0%] right-[1.17%] bottom-[0.66%] left-[1.25%]">
              <div className="absolute h-[0.69%] w-[1.35%] top-[99.31%] right-[78.65%] bottom-[0%] left-[20%] bg-darkgray-200" />
              <div className="absolute h-[0.57%] w-[1.52%] top-[89.99%] right-[98.48%] bottom-[9.44%] left-[0%] bg-darkgray-200" />
              <div className="absolute h-[0.82%] w-[1.52%] top-[10.14%] right-[98.42%] bottom-[89.04%] left-[0.06%] bg-gainsboro" />
              <div className="absolute h-[0.57%] w-[1.52%] top-[89.99%] right-[-0.01%] bottom-[9.44%] left-[98.49%] bg-darkgray-200" />
              <div className="absolute h-[0.78%] w-[1.52%] top-[10.18%] right-[-0.01%] bottom-[89.04%] left-[98.49%] bg-gainsboro" />
              <div className="absolute h-[0.68%] w-[1.6%] top-[0%] right-[19.74%] bottom-[99.32%] left-[78.66%] bg-gainsboro" />
            </div>
            <div className="absolute h-[0.68%] w-[14.24%] top-[0.89%] right-[42.93%] bottom-[98.43%] left-[42.83%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[-1.2422847747802734px_0px_0px_#2a2a2a_inset,_1.2422847747802734px_0px_0px_#2a2a2a_inset,_0px_0px_2.07px_0.41px_#000_inset] rounded-[12.42px] bg-gray-200 box-border border-[0.4px] border-solid border-gray-300" />
            </div>
            <div className="absolute h-[24.73%] w-[99.01%] top-[19.78%] right-[0.58%] bottom-[55.49%] left-[0.41%]">
              <div className="absolute h-[31.58%] w-[1%] top-[68.4%] right-[98.92%] bottom-[0.02%] left-[0.08%] shadow-[0px_-1.2952078580856323px_0px_#f2f3ed_inset,_0px_1.2952078580856323px_0px_#f2f3ed_inset,_-1.2952078580856323px_3.453887701034546px_0.86px_#41423c_inset,_-1.2952078580856323px_-3.453887701034546px_0.86px_#41423c_inset,_1.2952078580856323px_0px_0px_#41423c_inset,_2.158679723739624px_0px_1.73px_rgba(218,_219,_214,_0.66)_inset,_2.158679723739624px_0px_0px_#dadbd6_inset] rounded-[1.73px] bg-silver box-border border-[0.6px] border-solid border-gray-100" />
              <div className="absolute h-[31.9%] w-[1%] top-[29.78%] right-[98.92%] bottom-[38.31%] left-[0.08%] shadow-[-0.7942812442779541px_0px_0px_#f2f3ed_inset,_0px_-1.5885624885559082px_0.79px_#f2f3ed_inset,_0px_1.5885624885559082px_0px_#41423c_inset,_-1.5885624885559082px_0px_1.59px_#41423c_inset,_0px_3.1771249771118164px_0.4px_rgba(65,_66,_60,_0.3)_inset,_-1.1914217472076416px_-3.1771249771118164px_1.19px_rgba(218,_219,_214,_0.2)_inset,_0.39714062213897705px_0px_0px_#dadbd6_inset] rounded-[1.59px] bg-silver box-border border-[0.3px] border-solid border-gray-100" />
              <div className="absolute h-[17.19%] w-[1%] top-[0%] right-[99%] bottom-[82.81%] left-[0%] shadow-[-0.7942812442779541px_0px_0px_#f2f3ed_inset,_0px_-1.5885624885559082px_0.79px_#f2f3ed_inset,_0px_1.5885624885559082px_0px_#41423c_inset,_-1.5885624885559082px_0px_1.59px_#41423c_inset,_0px_3.1771249771118164px_0.4px_rgba(65,_66,_60,_0.3)_inset,_-1.1914217472076416px_-3.1771249771118164px_1.19px_rgba(218,_219,_214,_0.2)_inset,_0.39714062213897705px_0px_0px_#dadbd6_inset] rounded-[1.59px] bg-silver box-border border-[0.3px] border-solid border-gray-100" />
              <div className="absolute h-[48.12%] w-[0.75%] top-[40.42%] right-[-0.01%] bottom-[11.46%] left-[99.26%] shadow-[0px_1.7628910541534424px_1.76px_rgba(0,_0,_0,_0.25),_-1.2952078580856323px_0px_1.73px_rgba(65,_66,_60,_0.66)_inset,_1.726943850517273px_3.453887701034546px_0.86px_#41423c_inset,_1.726943850517273px_-3.453887701034546px_0.86px_#dadbd6_inset,_-1.726943850517273px_0px_0px_#dadbd6_inset] rounded-[1.73px] bg-silver box-border border-[0.3px] border-solid border-gray-100" />
            </div>
            <img
              className="absolute top-[33.76px] left-[185.07px] w-[119px] h-[32.6px]"
              alt=""
              src="/front-camera.svg"
            />
            <img
              className="absolute top-[105px] left-[136px] rounded-[14.01px] w-[354.2px] h-[336.8px] object-contain"
              alt=""
              src="/chatbot-card@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[48px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch relative leading-[140%] font-medium">
              Seamlessly Craft Custom Prompts with Ease Using Our AI Chatbot
              Platform
            </div>
            <div className="self-stretch relative text-lg leading-[160%] text-neutral-300">
              Transforming your interactions has never been simpler. Our
              cutting-edge AI chatbot platform empowers you to effortlessly
              design custom prompts, shaping dynamic conversations that resonate
              with your audience.
            </div>
          </div>
          <div className="rounded-81xl bg-neutral-50 box-border h-[50px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-8 text-center text-sm border-[1px] border-solid border-gray-800">
            <div className="relative leading-[160%] font-semibold">
              Learn More
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-0 px-16 gap-[48px] text-left">
        <div className="flex-1 flex flex-col items-start justify-start gap-[48px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch relative leading-[140%] font-medium">
              Explore Our Trending Prompts and Easily Elevate Your Conversations
            </div>
            <div className="self-stretch relative text-lg leading-[160%] text-neutral-300">
              Whether you're a seasoned conversational designer or just starting
              out, our platform empowers you to craft compelling dialogues that
              captivate your audience. Explore the realm of trending prompts!
            </div>
          </div>
          <div className="rounded-81xl bg-neutral-50 box-border h-[50px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-8 text-center text-sm border-[1px] border-solid border-gray-800">
            <div className="relative leading-[160%] font-semibold">
              Learn More
            </div>
          </div>
        </div>
        <div className="w-[646px] relative rounded-2xl bg-neutral-50 box-border h-[600px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-700">
          <img
            className="absolute bottom-[0px] left-[0px] w-[634px] h-[600px] object-cover"
            alt=""
            src="/image1@2x.png"
          />
          <img
            className="absolute top-[84.43px] left-[235px] rounded-[12.6px] w-[243.7px] h-[119.2px] object-contain"
            alt=""
            src="/prompt-card@2x.png"
          />
          <img
            className="absolute top-[213px] left-[65.42px] rounded-[12.31px] w-[216.1px] h-[94.5px] object-contain"
            alt=""
            src="/prompt-card1@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-16 gap-[48px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[64px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative leading-[140%] font-medium">
              <p className="m-0">Discover What Users</p>
              <p className="m-0">Love About Our Platform</p>
            </div>
            <div className="self-stretch relative text-lg leading-[160%] text-neutral-300">
              Uncover authentic experiences and insights straight from our users
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] text-left text-lg">
            <div className="w-[424px] rounded-2xl bg-base-white box-border flex flex-col items-start justify-start p-2 border-[1px] border-solid border-gray-700">
              <div className="self-stretch rounded-xl bg-neutral-50 flex flex-row items-start justify-start p-8 gap-[24px] border-[1px] border-solid border-gray-700">
                <div className="w-16 relative rounded-81xl bg-base-white box-border h-16 overflow-hidden shrink-0 border-[1px] border-solid border-gray-700">
                  <img
                    className="absolute top-[6px] left-[calc(50%_-_26px)] w-[52px] h-20 object-cover"
                    alt=""
                    src="/image2@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                  <div className="self-stretch relative leading-[160%]">
                    "As a small business owner, integrating Botify into our
                    website was a game-changer.”
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="self-stretch relative leading-[160%] font-semibold">
                      Michael Darsono
                    </div>
                    <div className="self-stretch relative text-xs leading-[160%] text-neutral-300">
                      Business Owner
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[424px] rounded-2xl bg-base-white box-border flex flex-col items-start justify-start p-2 border-[1px] border-solid border-gray-700">
              <div className="self-stretch rounded-xl bg-neutral-50 flex flex-row items-start justify-start p-8 gap-[24px] border-[1px] border-solid border-gray-700">
                <div className="w-16 relative rounded-81xl bg-base-white box-border h-16 overflow-hidden shrink-0 border-[1px] border-solid border-gray-700">
                  <img
                    className="absolute top-[6px] left-[calc(50%_-_20px)] w-10 h-20 object-cover"
                    alt=""
                    src="/confidentguy-1@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                  <div className="self-stretch relative leading-[160%]">
                    "The chatbot seamlessly integrates with our website,
                    providing instant assistance!”
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="self-stretch relative leading-[160%] font-semibold">
                      John Dukes
                    </div>
                    <div className="self-stretch relative text-xs leading-[160%] text-neutral-300">
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[424px] rounded-2xl bg-base-white box-border flex flex-col items-start justify-start p-2 border-[1px] border-solid border-gray-700">
              <div className="self-stretch rounded-xl bg-neutral-50 flex flex-row items-start justify-start p-8 gap-[24px] border-[1px] border-solid border-gray-700">
                <div className="w-16 relative rounded-81xl bg-base-white box-border h-16 overflow-hidden shrink-0 border-[1px] border-solid border-gray-700">
                  <img
                    className="absolute top-[6px] left-[calc(50%_-_24px)] w-12 h-20 object-cover"
                    alt=""
                    src="/19615-1@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                  <div className="self-stretch relative leading-[160%]">
                    "Since implementing Botify, we've seen a significant
                    increase in engagement.”
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="self-stretch relative leading-[160%] font-semibold">
                      Patricia Sanders
                    </div>
                    <div className="self-stretch relative text-xs leading-[160%] text-neutral-300">
                      Business Owner
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[424px] rounded-2xl bg-base-white box-border flex flex-col items-start justify-start p-2 border-[1px] border-solid border-gray-700">
              <div className="self-stretch rounded-xl bg-neutral-50 flex flex-row items-start justify-start p-8 gap-[24px] border-[1px] border-solid border-gray-700">
                <div className="w-16 relative rounded-81xl bg-base-white box-border h-16 overflow-hidden shrink-0 border-[1px] border-solid border-gray-700">
                  <img
                    className="absolute top-[6px] left-[calc(50%_-_23px)] w-[46px] h-20 object-cover"
                    alt=""
                    src="/2902-1@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                  <div className="self-stretch relative leading-[160%]">
                    "Botify's natural language processing capabilities are
                    impressive!”
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="self-stretch relative leading-[160%] font-semibold">
                      Stephanie Sharkey
                    </div>
                    <div className="self-stretch relative text-xs leading-[160%] text-neutral-300">
                      Business Owner
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[424px] rounded-2xl bg-base-white box-border flex flex-col items-start justify-start p-2 border-[1px] border-solid border-gray-700">
              <div className="self-stretch rounded-xl bg-neutral-50 flex flex-row items-start justify-start p-8 gap-[24px] border-[1px] border-solid border-gray-700">
                <div className="w-16 relative rounded-81xl bg-base-white box-border h-16 overflow-hidden shrink-0 border-[1px] border-solid border-gray-700">
                  <img
                    className="absolute top-[6px] left-[calc(50%_-_25px)] w-[50px] h-20 object-cover"
                    alt=""
                    src="/youngman-1@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                  <div className="self-stretch relative leading-[160%]">
                    "Botify has helped us scale our customer support operations
                    without compromising quality.”
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="self-stretch relative leading-[160%] font-semibold">
                      Kurt Bates
                    </div>
                    <div className="self-stretch relative text-xs leading-[160%] text-neutral-300">
                      Marketing Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[424px] rounded-2xl bg-base-white box-border flex flex-col items-start justify-start p-2 border-[1px] border-solid border-gray-700">
              <div className="self-stretch rounded-xl bg-neutral-50 flex flex-row items-start justify-start p-8 gap-[24px] border-[1px] border-solid border-gray-700">
                <div className="w-16 relative rounded-81xl bg-base-white box-border h-16 overflow-hidden shrink-0 border-[1px] border-solid border-gray-700">
                  <img
                    className="absolute top-[6px] left-[calc(50%_-_23px)] w-[46px] h-20 object-cover"
                    alt=""
                    src="/maturemansmilinghappily-1@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                  <div className="self-stretch relative leading-[160%]">
                    “We couldn't be happier with our decision to invest in this
                    platform!"
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="self-stretch relative leading-[160%] font-semibold">
                      Frances Swann
                    </div>
                    <div className="self-stretch relative text-xs leading-[160%] text-neutral-300">
                      Chief Technological Officer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-81xl bg-neutral-50 box-border h-[50px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-8 text-sm border-[1px] border-solid border-gray-800">
          <div className="relative leading-[160%] font-semibold">
            See All Testimonials
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-16 gap-[48px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[64px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative leading-[140%] font-medium">
              <p className="m-0">Everything You Need</p>
              <p className="m-0">to Know to Get Started</p>
            </div>
            <div className="self-stretch relative text-lg leading-[160%] text-neutral-300">
              Discover the essential knowledge and practical insights necessary
            </div>
          </div>
          <div className="w-[1312px] flex flex-row items-start justify-start gap-[32px] text-xs text-base-white">
            <div className="flex-1 rounded-2xl bg-base-white box-border h-[612px] overflow-hidden flex flex-col items-start justify-start p-4 border-[1px] border-solid border-gray-700">
              <div className="self-stretch flex-1 rounded-xl overflow-hidden flex flex-col items-start justify-between p-6 bg-[url('/public/container@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="[backdrop-filter:blur(24px)] rounded-81xl bg-gray-600 box-border h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-4 border-[1px] border-solid border-gray-500">
                  <div className="relative leading-[160%] font-semibold">
                    Recently Updated
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-5xl">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch relative leading-[140%] font-semibold">
                      <p className="m-0">AI Chatbots in Education</p>
                      <p className="m-0">
                        {" "}
                        Revolutionizing Learning Experiences
                      </p>
                    </div>
                    <div className="self-stretch relative text-base leading-[160%] text-neutral-50">
                      <p className="m-0">
                        Step into the future of education as AI chatbots
                        revolutionize
                      </p>
                      <p className="m-0">
                        learning experiences. Explore how cutting-edge
                        technology is
                      </p>
                      <p className="m-0">
                        reshaping the way we teach and learn.
                      </p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-sm text-neutral-50">
                    <div className="relative leading-[160%] font-medium">
                      12 May 2024
                    </div>
                    <div className="w-1.5 relative rounded-[50%] bg-neutral-50 h-1.5" />
                    <div className="relative leading-[160%] font-medium">
                      7 minutes read
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-2xl bg-base-white box-border h-[612px] overflow-hidden flex flex-col items-start justify-start p-4 border-[1px] border-solid border-gray-700">
              <div className="self-stretch flex-1 rounded-xl overflow-hidden flex flex-col items-start justify-between p-6 bg-[url('/public/container1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="[backdrop-filter:blur(24px)] rounded-81xl bg-gray-600 box-border h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-4 border-[1px] border-solid border-gray-500">
                  <div className="relative leading-[160%] font-semibold">
                    Recently Updated
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-5xl">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch relative leading-[140%] font-semibold">
                      <p className="m-0">AI Chatbots and the Future of Work:</p>
                      <p className="m-0">Trends and Predictions</p>
                    </div>
                    <div className="self-stretch relative text-base leading-[160%] text-neutral-50">
                      <p className="m-0">
                        Discover the latest trends and predictions that are
                      </p>
                      <p className="m-0">
                        reshaping industries and redefining the nature of
                      </p>
                      <p className="m-0">jobs as we know them.</p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-sm text-neutral-50">
                    <div className="relative leading-[160%] font-medium">
                      11 May 2024
                    </div>
                    <div className="w-1.5 relative rounded-[50%] bg-neutral-50 h-1.5" />
                    <div className="relative leading-[160%] font-medium">
                      5 minutes read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-81xl bg-neutral-50 box-border h-[50px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-8 text-sm border-[1px] border-solid border-gray-800">
          <div className="relative leading-[160%] font-semibold">
            Read More Blogs
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start relative">
        <div className="w-[1440px] bg-neutral-50 overflow-hidden flex flex-col items-center justify-center p-16 box-border relative gap-[48px] z-[0]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px] z-[0]">
            <div className="self-stretch relative leading-[140%] font-medium">
              <p className="m-0">Experience the Benefits</p>
              <p className="m-0">of Our AI Chatbots Today!</p>
            </div>
            <div className="self-stretch relative text-lg leading-[160%] text-neutral-300 opacity-[0.75]">
              <p className="m-0">{`Discover how our AI chatbots can streamline your operations, boost `}</p>
              <p className="m-0">
                customer engagement, and drive growth for your business
                effortlessly.
              </p>
            </div>
          </div>
          <div className="rounded-81xl bg-mediumseagreen h-[50px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-8 box-border z-[1] text-sm text-base-white">
            <div className="relative leading-[160%] font-semibold [text-shadow:0px_-0.5px_1px_rgba(0,_0,_0,_0.2),_0px_-0.5px_1px_rgba(0,_0,_0,_0.05)]">
              Take Action Now
            </div>
          </div>
          <img
            className="w-[398px] absolute !m-[0] top-[-184px] right-[-70px] h-[600px] object-cover z-[2]"
            alt=""
            src="/image3@2x.png"
          />
          <img
            className="w-[310px] absolute !m-[0] top-[80px] left-[64px] h-[400px] object-cover z-[3]"
            alt=""
            src="/image4@2x.png"
          />
        </div>
        <div className="self-stretch bg-mediumseagreen flex flex-col items-center justify-start py-20 px-16 gap-[96px] z-[1] text-left text-base text-base-white">
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-start gap-[8px] text-xl font-body-medium-regular">
                <img
                  className="w-7 relative h-7 overflow-hidden shrink-0"
                  alt=""
                  src="/logo6.svg"
                />
                <b className="relative leading-[140%]">Built for AI</b>
              </div>
              <div className="self-stretch relative leading-[160%] font-semibold">
                Your Virtual Chat Partner
              </div>
              <div className="self-stretch relative leading-[160%]">
                hello@botify.com
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[120px] text-whitesmoke">
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch relative leading-[160%] font-semibold text-base-white">
                  Company
                </div>
                <div className="self-stretch relative leading-[160%]">
                  About Us
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Careers
                </div>
                <div className="self-stretch relative leading-[160%]">Blog</div>
                <div className="self-stretch relative leading-[160%]">
                  Contact
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch relative leading-[160%] font-semibold text-base-white">
                  Products
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Chatbot
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Integration
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Live Chat
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch relative leading-[160%] font-semibold text-base-white">
                  Our Policies
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Privacy Policy
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Terms of Service
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Refund Policy
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Code of Conduct
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch relative leading-[160%] font-semibold text-base-white">
                  Social Media
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Instagram
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Facebook
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Linkedin
                </div>
                <div className="self-stretch relative leading-[160%]">
                  Youtube
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-center text-neutral-50">
            <div className="flex-1 relative leading-[160%]">
              © Copyright Botify 2024
            </div>
          </div>
        </div>
        <img
          className="w-[26px] absolute !m-[0] top-[520px] left-[64px] h-8 z-[2]"
          alt=""
          src="/vector1.svg"
        />
      </div>
    </div>
  );
};

export default CHATBOTLANDINGPAGEDESIGN;
