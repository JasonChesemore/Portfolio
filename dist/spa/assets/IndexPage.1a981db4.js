import{c as v,h as $}from"./render.de9d4120.js";import{d as g,e as s,c as d,h as k,f as B,B as F,g as P,F as y,Y as Q,_ as C,r as m,G as u,R as p,Q as i,N as r,T as _,S as x,O as q,I as E,J as I,K as S}from"./index.484edbf2.js";var b=v({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:c}}=P(),t=g(B,s);if(t===s)return console.error("QPage needs to be a deep child of QLayout"),s;if(g(F,s)===s)return console.error("QPage needs to be child of QPageContainer"),s;const l=d(()=>{const a=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const h=t.isContainer.value===!0?t.containerHeight.value:c.screen.height;return e.styleFn(a,h)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-a+"px":c.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":c.screen.height-a+"px"}}),o=d(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>k("main",{class:o.value,style:l.value},$(n.default))}});function j(){const e=m(0);function n(){return e.value+=1,e.value}return{clickCount:e,increment:n}}function H(e){return{todoCount:d(()=>e.value.length)}}const K=y({name:"ExampleComponent",props:{title:{type:String,required:!0},todos:{type:Array,default:()=>[]},meta:{type:Object,required:!0},active:{type:Boolean}},setup(e){return{...j(),...H(Q(e,"todos"))}}});function N(e,n,c,t,f,l){return u(),p("div",null,[i("p",null,r(e.title),1),i("ul",null,[(u(!0),p(_,null,x(e.todos,o=>(u(),p("li",{key:o.id,onClick:n[0]||(n[0]=(...a)=>e.increment&&e.increment(...a))},r(o.id)+" - "+r(o.content),1))),128))]),i("p",null,"Count: "+r(e.todoCount)+" / "+r(e.meta.totalCount),1),i("p",null,"Active: "+r(e.active?"yes":"no"),1),i("p",null,"Clicks on todos: "+r(e.clickCount),1)])}var R=C(K,[["render",N]]);const w=y({name:"IndexPage",components:{ExampleComponent:R},setup(){const e=m([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),n=m({totalCount:1200});return{todos:e,meta:n}}});function z(e,n,c,t,f,l){const o=q("example-component");return u(),E(b,{class:"row items-center justify-evenly"},{default:I(()=>[S(o,{title:"Example component",active:"",todos:e.todos,meta:e.meta},null,8,["todos","meta"])]),_:1})}var L=C(w,[["render",z]]);export{L as default};
