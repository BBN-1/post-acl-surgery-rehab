import hang_pic_1 from "../../images/stageTwoRom/prone_hangs_1.png";
import hang_pic_2 from "../../images/stageTwoRom/prone_hangs_2.png";
import wall_slides_1 from "../../images/stageTwoRom/wall_slides_1.png";
import wall_slides_2 from "../../images/stageTwoRom/wall_slides_2.png";
import ham_stretch_1 from "../../images/stageTwoRom/ham_stretch_1.png";
import ham_stretch_2 from "../../images/stageTwoRom/ham_stretch_2.png";
import gastroc_stretch_1 from "../../images/stageTwoRom/gastroc_stretch_1.png";
import gastroc_stretch_2 from "../../images/stageTwoRom/gastroc_stretch_2.png";
import bike from "../../images/stageTwoRom/bike.png";
import chair_band_1 from "../../images/stageTwoStr/chair_band_1.png";
import chair_band_2 from "../../images/stageTwoStr/chair_band_2.png";
import chair_hamstring_1 from "../../images/stageTwoStr/chair_hamstring_1.png";
import chair_hamstring_2 from "../../images/stageTwoStr/chair_hamstring_2.png";
import squat_1 from "../../images/stageTwoStr/squat_1.png";
import squat_2 from "../../images/stageTwoStr/squat_2.png";
import squat_3 from "../../images/stageTwoStr/squat_3.png";
import squat_4 from "../../images/stageTwoStr/squat_4.png";
import hip_adduction_1 from "../../images/stageTwoStr/hip_adduction_1.png";
import hip_adduction_2 from "../../images/stageTwoStr/hip_adduction_2.png";
import hip_abduction_1 from "../../images/stageTwoStr/hip_abduction_1.png";
import hip_abduction_2 from "../../images/stageTwoStr/hip_abduction_2.png";
import hip_extension_1 from "../../images/stageTwoStr/hip_extension_1.png";
import hip_extension_2 from "../../images/stageTwoStr/hip_extension_2.png";
import calf_raises_1 from "../../images/stageTwoStr/calf_raises_1.png";
import calf_raises_2 from "../../images/stageTwoStr/calf_raises_2.png";
import calf_raises_3 from "../../images/stageTwoStr/calf_raises_3.png";

const exercisesListData = [
    {
        route: "second-rom",
        main_stage_route: "second",
        exercise_data: [
            {
                id: 1,
                title: "УВИСВАНЕ НА КРАКАM",
                subtitle:
                    "Сетове: 4x/ден | Повторения: 5 | Задържане: 20-30 sec",
                preparation: [
                    "Легнете по корем на маса или легло, с вашите колене приблизително на 5 см от края на леглото",
                ],
                execution: [
                    "Бавно оставете оперираното коляно да се разтегне и след това да виси",
                    "Разгънатата позиция не трябва да причинява болка",
                    "ДОБАВЯНЕ: Добавете тежка обувка или тежест (400-800 грама) към глезена",
                ],
                img1: hang_pic_1,
                img2: hang_pic_2,
            },

            {
                id: 2,
                title: "СЛАЙДОВЕ НА СТЕНА",
                subtitle: "Сетове: 4x/ден | Повторения: 10-15",
                preparation: [
                    "Легнете по гръб, на пода или на легло",
                    "Поставете краката си на стената с почти нацяло разгънати колене ",
                ],
                execution: [
                    "Бавно позволете на петите ви да се плъзнат надолу по стената, карайки коленете ви да се огъват",
                    "Използвайте неоперирания си крак, за да върнете оперирания крак до изходна позиция",
                ],
                img1: wall_slides_1,
                img2: wall_slides_2,
            },
            {
                id: 3,
                title: "РАЗТЯГАНЕ НА ПОДБЕДРИЦАТА",
                subtitle:
                    "Сетове: 4x/ден | Повторения: 5 | Задържане: 20-30 sec",
                preparation: [
                    "Легнете по гръб",
                    "Използвайте кърпа, колан или каишка, за да придържате глезена",
                ],
                execution: [
                    "Поддържайки коляното си изправено, повдигнете крака си нагоре, докато не усетете разтягане в задната част на бедрото",
                    "Задръжте и след това бавно спуснете крака",
                    "Редувайте краката",
                ],
                img1: ham_stretch_1,
                img2: ham_stretch_2,
            },
            {
                id: 4,
                title: "РАЗТЯГАНЕ НА ПРАСЕЦА",
                subtitle:
                    "Сетове: 4x/ден | Повторения: 5 | Задържане: 20-30 sec",
                preparation: [
                    "Седнете с изпънати крака пред вас",
                    "Преметнете кърпа или колан около долната страна на вашия крак",
                ],
                execution: [
                    "Издърпайте кърпата, приближавайки пръстите на краката към себе си и  разтегнете мускулите на прасеца",
                    "Не сгъвайте коляното си",
                ],
                img1: gastroc_stretch_1,
                img2: gastroc_stretch_2,
            },
            {
                id: 5,
                title: "КОЛОЕЗДЕНЕ НА СТАЦИОНАРЕН ВЕЛОСИПЕД",
                subtitle:
                    "Темпо: според възможностите, Продължителност: 10-20 мин",
                preparation: [
                    "Използвайте малко или никакво съпротивление с по-висока седалка от нормалното",
                    "Когато се качвате на велосипеда, приближавайте от неоперирана страна.",
                ],
                execution: [
                    "Започнете с бавни полукръгове напред и назад",
                    "Бавно напредвайте към пълно завъртане. Трябват ви 105-110 градуса флексия за да направите пълно завъртане.",
                ],
                img1: bike,
            },
        ],
    },
    {
        route: "second-str",
        main_stage_route: "second",
        exercise_data: [
            {
                id: 1,
                title: "КОНЦЕНТРИЧНО РАЗГЪВАНЕ | КРАЕН ДИАПАЗОН (ЛАСТИК + СТОЛ)",
                subtitle: "Сетове: 4x/ден | Повторения: 10-15",
                preparation: [
                    "Поставете лентата зад коляното малко над колянна става, както е показано",
                    "рикрепете лента към стол или врата",
                    "Застанете в добра стойка, коленете са леко свити",
                ],
                execution: [
                    "Изправете коляното си, колкото можете",
                    "Отпуснете коляното, връщайки се в изходна позиция",
                ],
                img1: chair_band_1,
                img2: chair_band_2,
            },

            {
                id: 2,
                title: "ФЛЕКСИЯ НА ПОДБЕДРИЦАТА С ЛАСТИК ДОКАТО СТЕ СЕДНАЛИ",
                subtitle: "Сетове: 4x/ден | Повторения: 5-10",
                preparation: [
                    "Седнете на стола",
                    "Прикрепете здраво единия край на ластика към опора (приблизително средна височина на пищяла)",
                    "Прехвърлете другия край около глезена си",
                ],
                execution: [
                    "Използвайте подбедрените мускули за да сгънете коляното си",
                    "Върнете се в изходна позиция и повторете",
                ],
                img1: chair_hamstring_1,
                img2: chair_hamstring_2,
            },
            {
                id: 3,
                title: "1/4 КЛЕК С ОПОРА",
                subtitle: "Сетове: 4x/ден | Повторения: 10-20",
                preparation: [
                    "Застанете със стъпала на ширината на раменете",
                    "Поставете ръцете си върху опора (напр. плот)",
                ],
                execution: [
                    "Клекнете, сякаш ще седнете",
                    "Клякайте само частично (диапазон 0-40 градуса максимум), след което се върнете в изправено положение",
                    "Работете до извършване на клекове без опора",
                    "Старайте се да разпределяте тежестта поравно за всеки крак",
                ],
                img1: squat_1,
                img2: squat_2,
                img3: squat_3,
                img4: squat_4,
            },
            {
                id: 4,
                title: "БЕДРЕНА АДДУКЦИЯ (ЛАСТИК)",
                subtitle: "Сетове: 4x/ден | Повторения: 10-15",
                preparation: [
                    "Застанете с лента около бедрото, както е показано",
                    "Използвайте стола, за да се стабилизирате",
                ],
                execution: ["Съберете краката заедно"],
                img1: hip_adduction_1,
                img2: hip_adduction_2,
            },
            {
                id: 5,
                title: "БЕДРЕНА АБДУКЦИЯ (ЛАСТИК)",
                subtitle: "Сетове: 4x/ден | Повторения: 10-15",
                preparation: [
                    "Застанете с лента около бедрото, както е показано",
                    "Използвайте стола, за да се стабилизирате",
                ],
                execution: ["Издърпайте крака отстрани"],
                img1: hip_abduction_1,
                img2: hip_abduction_2,
            },
            {
                id: 6,
                title: "БЕДРЕНА ЕКСТЕНЗИЯ (ЛАСТИК)",
                subtitle: "Сетове: 4x/ден | Повторения: 10-15",
                preparation: [
                    "Застанете с лента около бедрото, както е показано",
                    "Използвайте стола, за да се стабилизирате",
                ],
                execution: ["Повдигнете крака зад себе си"],
                img1: hip_extension_1,
                img2: hip_extension_2,
            },
            {
                id: 7,
                title: "ПОВДИГАНЕ ЗА ПРАСЦИ",
                subtitle: "Сетове: 4x/ден | Повторения: 15-20",
                preparation: [
                    "За двустранно: застанете на двата крака с пръсти насочен право напред",
                    "За едностранно: застанете на един крак с пръсти насочен право напред, сгънете леко другия",
                ],
                execution: [
                    "Използвайте мускулите на прасеца, за да се издигнете на пръсти, повдигайки петите ви от земята, колкото можете по-високо",
                    "Осигурете бавно, контролирано движение нагоре и надолу",
                    "Етап на напредък - 1во двата крака (двустранно) с опора, 2ро един крак (едностранно) с опора, 3то два крака без опора.",
                ],
                img1: calf_raises_1,
                img2: calf_raises_2,
                img3: calf_raises_3,
            },
        ],
    },
];

export default exercisesListData;
