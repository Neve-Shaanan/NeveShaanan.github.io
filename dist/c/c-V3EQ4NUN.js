import{a as t,e as s}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-5QW7XRA7.js";import{p as a,r,v as d}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-ICCT4MUX.js";import{a as o,g as l,h as p}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YRBU4WCA.js";import{a as n}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";var i,b,c=n(()=>{"use strict";d();p();s();i=t.withComponent(r("input")`
  font-family: ${l.fonts.main};
  ${e=>e.ellipsis?`overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;`:""}
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  resize: none;
  border-radius: 0;
  appearance: none;
  color: inherit;

  &::-webkit-search-cancel-button {
    appearance: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray};
  }

  &:disabled,
  &:disabled::placeholder {
    -webkit-text-fill-color: ${({theme:e})=>e.colors.gray};
    opacity: 1;
  }

  ${a({regular:{padding:"0 0 10px 0",height:20,color:o.black,"&:focus":{borderBottom:`2px solid ${o.black}`}},small:{padding:0,height:40,color:o.black,"&:focus":{padding:"2px 0 0",height:38,borderBottom:`2px solid ${o.black}`}},smallMasked:{padding:0,height:40,color:o.gray,"&:focus":{padding:"2px 0 0",height:38,borderBottom:`2px solid ${o.gray}`}}})};
`);i.defaultProps={variant:"regular",textStyle:"regular",border:"none"};b=i});export{b as a,c as b};
