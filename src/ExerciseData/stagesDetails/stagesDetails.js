import stage_two_top from "../../images/stage_two_top.png";
import stage_two_goals from "../../images/stage_two_goals.png";
import stage_two_education from "../../images/stage_two_education.png";
import first_stage_hero_tr from "../../images/stageOne/first_stage_hero_tr.png";
import third_stage_hero_tr from "../../images/stageThree/third_stage_hero_tr.png";
import fourth_stage_hero from "../../images/stageFour/fourth_stage_hero.png"

const stagesDetails = [
    {
        id: 1,
        route: "second",
        stage_hero_img: stage_two_top,
        title_rom: "II Етап - Обхват на движение",
        title_str: "II Етап - Укрепване",
        route_rom: "second-rom",
        route_str: "second-str",
        title_stage_special: "II Етап - Вървене",
        route_special: "second-walking",
        goals_img: stage_two_goals,
        goals_list: [
            "- Пълно разтягане на коляното 0 градуса",
            "- Постигане на обхват на движение 0-120 градуса",
            "- Намаляне на подуването",
            "- Нормализиране на походката",
            "- Връщане към ежедневните дейности",
        ],
        education_img: stage_two_education,
        education_list: [
            "- Прогресирайте към пълно носене на тежестта (т.е. ходене без патерици).",
            "- За да спрете да използвате патерици, трябва да можете да ходите без накуцване, докато използвате патерици.",
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
        title_stage_special: "I Етап - Вървене",
        route_special: "first-walking",
        goals_img: stage_two_goals,
        goals_list: [
            "- Пълно разгъване на коляното (изправяне)",
            "- Минимизиране на подуването",
            "- Минимум 0-90 градуса oбхват на движение",
            "- Заздравяване на раната",
        ],
        education_img: stage_two_education,
        education_list: [
            "- Стъпване на крака с помощта на вашата брейс и патерици, които позволяват качествено движение в рамките на вашата толерантност към болка.",
            "- Започнете от около 50% и увеличете според поносимостта до пълно натоварване.",
            "- Снимките и описанията ще очертаят как правилно да навигирате в различни среди.",
            "- Kомпрес с лед се прилага незабавно след операция и се използва 20 минути на всеки час, особено след упражнения.",
            "- Оперираното коляно трябва да е повдигнато и в покой когато прилагате лед"
        ],
    },
    {
        id: 3,
        route: "third",
        stage_hero_img: third_stage_hero_tr,
        title_str: "III Етап - Укрепване",
        route_str: "third-str",
        title_stage_special: "III Етап - Кардио",
        route_special: "third-cardio",
        title_balance: "III Етап - Баланс",
        route_balance: "third-balance",
        goals_img: stage_two_goals,
        goals_list: [
            "- Самостоятелно укрепване във фитнеса",
            "- Премахване на подуването",
            "- Постигнете пълен обхват на движение",
            "- Извършване на всички дейности от ежедневието, например: стълбищa",
            "- Връщане на работа (всички работни места с изключение на тежък труд",
            "- Може да започнете да правите упражнения за горната част на тялото стига да не завъртате колянната става",
        ],
        education_img: stage_two_education,
        education_list: [
            "- След тренировка/активност и ако има нужда използвайте лед за да контролирайте подуването (Продължителност: 15-20 мин | Честота: според нуждите)",
        ],
    },
    {
        id: 4,
        route: "fourth",
        stage_hero_img: fourth_stage_hero,
        title_str: "IV Етап - Укрепване",
        route_str: "fourth-str",
        title_stage_special: "IV Етап - Кардио",
        route_special: "fourth-cardio",
        title_balance: "IV Етап - Баланс",
        route_balance: "fourth-balance",
        goals_img: stage_two_goals,
        goals_list: [
            "- Поддържайте пълен обем на движение – трябва да е равен на неоперирания крак",
            "- Продължете укрепването на мускулите",
            "- Подобрете баланса",
            "- Подобряване на ловкостта",
       
        ],
        education_img: stage_two_education,
        education_list: [
            "- След тренировка/активност и ако има нужда използвайте лед за да контролирайте подуването (Продължителност: 15-20 мин | Честота: според нуждите)",
        ],
    },
];

export default stagesDetails;
