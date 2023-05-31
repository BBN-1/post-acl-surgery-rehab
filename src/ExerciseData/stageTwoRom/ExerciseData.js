import hang_pic_1 from "../../images/stageTwoRom/prone_hangs_1.png";
import hang_pic_2 from "../../images/stageTwoRom/prone_hangs_2.png";
import wall_slides_1 from "../../images/stageTwoRom/wall_slides_1.png";
import wall_slides_2 from "../../images/stageTwoRom/wall_slides_2.png";
import ham_stretch_1 from "../../images/stageTwoRom/ham_stretch_1.png";
import ham_stretch_2 from "../../images/stageTwoRom/ham_stretch_2.png";
import gastroc_stretch_1 from "../../images/stageTwoRom/gastroc_stretch_1.png";
import gastroc_stretch_2 from "../../images/stageTwoRom/gastroc_stretch_2.png";
import bike from "../../images/stageTwoRom/bike.png";

const romExercise = [
    {
        id: 1,
        title: "УВИСВАНЕ НА КРАКА",
        subtitle: "Сетове: 4x/ден | Повторения: 5 | Задържане: 20-30 sec",
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
          "Поставете краката си на стената с почти нацяло разгънати колене "
      ],
      execution: [
          "Бавно позволете на петите ви да се плъзнат надолу по стената, карайки коленете ви да се огъват",
          "Използвайте неоперирания си крак, за да върнете оперирания крак до изходна позиция"
      ],
      img1: wall_slides_1,
      img2: wall_slides_2,
  },
  {
    id: 3,
    title: "РАЗТЯГАНЕ НА ПОДБЕДРИЦАТА",
    subtitle: "Сетове: 4x/ден | Повторения: 5 | Задържане: 20-30 sec",
    preparation: [
        "Легнете по гръб",
        "Използвайте кърпа, колан или каишка, за да придържате глезена"
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
    subtitle: "Сетове: 4x/ден | Повторения: 5 | Задържане: 20-30 sec",
    preparation: [
        "Седнете с изпънати крака пред вас",
        "Преметнете кърпа или колан около долната страна на вашия крак"
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
    subtitle: "Темпо: според възможностите, Продължителност: 10-20 мин",
    preparation: [
        "Използвайте малко или никакво съпротивление с по-висока седалка от нормалното",
        "Когато се качвате на велосипеда, приближавайте от неоперирана страна."
    ],
    execution: [
     
        "Започнете с бавни полукръгове напред и назад",
        "Бавно напредвайте към пълно завъртане. Трябват ви 105-110 градуса флексия за да направите пълно завъртане."
    ],
    img1: bike,
  
}



];

export default romExercise;
