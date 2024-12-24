// Importing images for different stages
import stage_two_top from "../../images/stage_two_top.png";
import stage_two_goals from "../../images/stage_two_goals.png";
import stage_two_education from "../../images/stage_two_education.png";
import first_stage_hero_tr from "../../images/stageOne/first_stage_hero_tr.png";
import third_stage_hero_tr from "../../images/stageThree/third_stage_hero_tr.png";
import fourth_stage_hero from "../../images/stageFour/fourth_stage_hero.png";

// Array of stage details objects in English
const stagesDetailsInEnglish = [
    {
        id: 1,
        route: "second",
        stage_hero_img: stage_two_top,
        title_rom: "II Stage - RANGE OF MOTION",
        title_str: "II Stage - STRENGTHENING",
        route_rom: "second-rom",
        route_str: "second-str",
        title_stage_special: "II Stage - WALKING",
        route_special: "second-walking",
        goals_img: stage_two_goals,
        goals_list: [
            "- Maintain knee extension at 0 degrees",
            "- Achieve 0-120 degree range of motion",
            "- Swelling reduction",
            "- Normalizing walking pattern",
            "- Return to activities of daily living",
        ],
        education_img: stage_two_education,
        education_list: [
            "- Progress towards full weight bearing (FWB) (i.e. walking without crutches).",
            "- In order to stop using crutches, you must be able to walk without a limp while using crutches.",
            "- Monitor and control swelling.",
            "- Use ice and/or compression after exercise and as required (15-20 minutes per session)",
        ],
    },
    {
        id: 2,
        route: "first",
        stage_hero_img: first_stage_hero_tr,
        title_rom: "I Stage - RANGE OF MOTION",
        title_str: "I Stage - STRENGTHENING",
        route_rom: "first-rom",
        route_str: "first-str",
        title_stage_special: "I Stage - WALKING",
        route_special: "first-walking",
        goals_img: stage_two_goals,
        goals_list: [
            "- Full knee extension (straightening)",
            "- Minimize swelling",
            "- Minimum of 0-90 degrees of ROM",
            "- Appropriate wound healing",
        ],
        education_img: stage_two_education,
        education_list: [
            "- Weight bearing using your brace and crutches that allow quality movement within your pain tolerance.",
            "- Start at about 50% and increase as tolerated to full weight bearing.",
            "- The diagrams and descriptions below will outline how to properly navigate different environments.",
            "- Ice pack applied immediately after surgery and used 20 minutes every hour, especially after exercises.",
            "- Operated knee should be elevated when icing and at rest.",
        ],
    },
    {
        id: 3,
        route: "third",
        stage_hero_img: third_stage_hero_tr,
        title_str: "III Stage - STRENGTHENING",
        route_str: "third-str",
        title_stage_special: "III Stage - CARDIO",
        route_special: "third-cardio",
        title_balance: "III Stage - BALANCE",
        route_balance: "third-balance",
        goals_img: stage_two_goals,
        goals_list: [
            "- Independent strengthening at the gym",
            "- Eliminate swelling",
            "- Achieve full range of motion",
            "- Perform all activities of daily living (ADLs), example: stairs",
            "- Return to work (all other jobs except heavy labour or difficult environmental conditions)",
            "- Clear to do upper body and core strengthening that do not involve pivoting to the knee",
        ],
        education_img: stage_two_education,
        education_list: [
            "- Use ice and/or compression after exercise and as required (15-20 minutes per session)",
        ],
    },
    {
        id: 4,
        route: "fourth",
        stage_hero_img: fourth_stage_hero,
        title_str: "IV Stage - STRENGTHENING",
        route_str: "fourth-str",
        title_stage_special: "IV Stage - CARDIO",
        route_special: "fourth-cardio",
        title_balance: "IV Stage - BALANCE",
        route_balance: "fourth-balance",
        goals_img: stage_two_goals,
        goals_list: [
            "- Maintain full ROM - should be equal to the nonoperated leg",
            "- Continue strengthening",
            "- Improve balance",
            "- Improve agility",
        ],
        education_img: stage_two_education,
        education_list: [
            "- Use ice and/or compression after exercise and as required (15-20 minutes per session)",
        ],
    },
];

export default stagesDetailsInEnglish;
