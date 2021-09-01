
function Hello2(){
    // 자바스크립트 변수 형태
    let name = 'React';
    return(
        <>
            {/* Hello2컵포넌트 */}
            <section className = "section01" id="section01">
                Hello {name} react in Hello 
            </section>
            
            <section className = "section02" id="section02">
                Hello {name}react in Hello  in component
            </section>
        </>
    )
}

export default Hello2;