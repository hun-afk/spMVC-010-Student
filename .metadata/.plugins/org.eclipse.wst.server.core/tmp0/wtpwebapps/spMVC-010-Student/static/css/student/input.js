document.addEventListener("DOMContentLoaded", () => {
    const student_table = document.querySelector("table.student.list");
    /*
        객체?.fun()
        객체 요소가 null이 아닐때만 fun()함수를 실행
        null safe code 라고한다.
    */
    const student_data = student_table.querySelector("tbody")

    const onDataClickHandlr = (e) => {
        // click event 가 최초로 발생한 요소 = target(td)
        const target = e.target
        if(target.tagName === "TD") {
            // TD tag의 값(문자열) 확인
            alert(target.textContext);
        }
    };
    student_data.addEventListener("click", onDataClickHandlr);
});