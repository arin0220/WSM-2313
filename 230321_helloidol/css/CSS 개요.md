# style 적용 3가지 방법
1. <... style="..."> in HTML
1. ```<style>...</style>``` in HTML ```<head>```
1. __.css 파일 만들어서 link__

# 형식
```css
selector {
    attribute: value;   /* comment*/
}
```
## selector

<pre>
* = 전체 적용
#id = id고유한 것 id가 하나만 있어야함 두개면 규칙 위반
. class = 여러개인것
TAG 그냥 태그 쓰기

selector1  selector2    = 첫 번째 요소의 자손인 노드를 선택
selector1 > selector2   = 첫 번째 요소의 바로 아래 자식인 노드를 선택

selector1, selector2    = 선택자 그룹을 생성하는 방법으로, 모든 일치하는 노드를 선택
selector1 + selector2   = 인접 형제, 즉 첫 번째 요소의 바로 뒤에 위치하면서 같은 부모를 공유하는 두 번째 요소를 선택 | selector1의 첫째 자매 selector2 하나 선택
selector1 ~ selector2   = 형제, 즉 첫 번째 요소를 뒤따르면서 같은 부모를 공유하는 두 번째 요소를 선택 | selector1의 첫째 자매 selector2 모두 선택

selector:first-child()  = selector 요소 중 첫번째
selector:nth-child(n)   = 형제 요소 중에서 특정 순서(n)에 있는 요소를 선택할 때 사용
selector:hover          = 요소의 마우스가 올라가는 동안 selector를 선택

[속성="값"]     <TAG 속성 = "값">인 모든 요소 선택

</pre>
# 우선순위
1. !important
2. #id
3. .class
4. TAG
5. *
- 구체 > 포괄
6. 같은 우선순위일 때, 나중에 쓴 것이 적용
