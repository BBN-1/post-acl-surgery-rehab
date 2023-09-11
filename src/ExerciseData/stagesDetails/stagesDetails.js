
import stage_two_top from "../../images/stage_two_top.png";
import stage_two_goals from "../../images/stage_two_goals.png"
import stage_two_education from "../../images/stage_two_education.png";
import first_stage_hero_tr from "../../images/stageOne/first_stage_hero_tr.png"



const stagesDetails = [
    {
        id: 1,
        route: "second",
        stage_hero_img: stage_two_top,
        title_rom: "II Етап - Обхват на движение",
        title_str: "II Етап - Укрепване",
        route_rom: "second-rom",
        route_str: "second-str",
        goals_img: stage_two_goals,
        goals_list: ["- Пълно разтягане на коляното 0 градуса", "- Постигане на обхват на движение 0-120 градуса", "- Намаляне на подуването", "- Нормализиране на походката", "- Връщане към ежедневните дейности"],
        education_img: stage_two_education,
        education_list: [
            "- Наблюдавайте и контролирайте подуването",
            "- Използвайте лед след тренировка (15-20 минути на сесия) 2-3x ден",
            "- Работете върху нормализиране на модела на ходене",
        ],
      
    },
    {
        id: 2,
        route: "first",
        stage_hero_img: first_stage_hero_tr,
        title_rom: "I Етап - Обхват на движение",
        title_str: "I Етап - Укрепване",
        route_rom: "first-rom",
        route_str: "first-str",
        goals_img: stage_two_goals,
        goals_list: ["- Пълно разгъване на коляното (изправяне)", "- Минимизиране на подуването", "- Минимум 0-90 градуса oбхват на движение", "- Заздравяване на раната"],
        education_img: stage_two_education,
        education_list: [
            "- Стъпване на крака с помощта на вашата брейс и патерици, които позволяват качествено движение в рамките на вашата толерантност към болка.",
            "- Започнете от около 50% и увеличете според поносимостта до пълно натоварване.",
            "- Снимките и описанията ще очертаят как правилно да навигирате в различни среди.",
        ],
    
    },

];

export default stagesDetails;