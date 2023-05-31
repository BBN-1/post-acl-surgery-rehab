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

const strExercise = [
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
];

export default strExercise;
