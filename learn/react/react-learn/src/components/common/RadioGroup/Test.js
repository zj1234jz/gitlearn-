import CheckboxGroup from "./index"
import React, { Component } from 'react'
import getAllStudents from "../../services/index"
export default class Test extends Component {
    async componentDidMount() {
        console.log("componentDidMount")
        const arr = await getAllStudents();
        console.log(arr)
        this.setState({
            datas:arr.map(item=>({value:item.id.toString(),text:item.name}))
        })
    }
    
    state={
        datas:[
            {value:"football",text:"夏弥要小心哦，不要被泡了哦，防火防盗防师兄哦！"},
            {value:"basketball",text:"你试过在人群里默默地观察一个人么？看他在篮球场上一个人投篮，看他站在窗前连续几个小时看下雨，看他一个人放学一个人打扫卫生一个人在琴房里练琴。你从他的生活里找不到任何八卦任何亮点，真是无聊透顶。你会想我靠！我要是他可不得郁闷死了？能不那么孤独么？这家伙装什么酷嘛，开心傻笑一下会死啊？”夏弥顿了顿，“可你发现你并不讨厌他，因为你也跟他一样……隔着人来人往，观察者和被观察者是一样的"},
            {value:"phone",text:"好像我吃了你的女孩似的，去那里找夏弥吧，我把她的一切都留在那里了"},
            {value:"wifi",text:"楚子航脸色更加难看。他这是被触动了往事……高中时候他曾经为了回报拉拉队长的到场声援他们和外校的男篮比赛而请她看过一场电影，当然还了人情之后他就没再联系她，其后那个总穿短裙书梳高马尾的姑娘看他的眼神里……好像写满怨尤，他不太明白为什么。此外他还请仕兰中学舞蹈团团长参观过水族馆，给她讲过公海马如何把小海马放在育儿袋里养育，逗得她咯咯地笑了一路，状态很有些癫狂。楚子航这么做是因为他和舞蹈团团长一起做一份以海洋动物为主题的课外论文，论文写完之后他就没再联系她……"},
            {value:"xigua",text:`这种日剧里经常出现的情节居然会发生在他身上，人海中偶尔有个背影让你觉得眼熟，你不顾一切地奔过去，在背后喊他，那人转过头来，却是一张陌生的脸。
            心里有事的时候，人人都会自作多情`}
        ],
        name:"loves",
        choose:[],
    }
    render() {
        return (
            <div>
                <CheckboxGroup {...this.state} onDataChange={newarr=>{
                this.setState({
                    choose:newarr
                })
            }}/>
            </div>
        )
    }
}



