// pages/crowdDetail/crowdDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: "",
    blockTitle: "",
    swiperImgList: {
      children: [
        {
          id: 0,
          type: 'image',
          url: 'https://cp.cw1.tw/files/md5/03/4a/034ae161b73c8c030f68658547a9f06e-132773.jpg'
        },
        {
          id: 1,
          type: 'image',
          url: 'https://cdn2.ettoday.net/images/3593/d3593924.jpg'
        },
        {
          id: 2,
          type: 'image',
          url: 'https://s3-ap-southeast-1.amazonaws.com/mababy-production/knowledge/dea9cf57-83ec-4cd4-aafe-7c3607c21581'
        }
      ],
      teenagers: [
        {
          id: 0,
          type: 'image',
          url: 'https://thumbs.dreamstime.com/b/e-r-132185883.jpg'
        },
        {
          id: 1,
          type: 'image',
          url: 'https://lh3.googleusercontent.com/proxy/d1PwZJLJzBjwtEiboTzAbEOPlsYOw_WnPSsssMqiGKbp6rNY_BdBkgWo0J_d4dVC0XPSyon9E1k0WqgC0pLeEG0XFFe19Z1z0s-_H_Uezb9E8erWlVdf7mHAWs8'
        },
        {
          id: 2,
          type: 'image',
          url: 'https://lh3.googleusercontent.com/proxy/2uIIGmQqmK3wshHNR2oNoHtrk6jW4fAdGL8UJza4W0ATUkF6fhqLk2LZ4spYwRGmm4VAx4wihjj1tLFopyBJzjtPjwYcsuiMgdyAl1kMeVeUaBNKY2_srJaGfTg'
        }
      ],
      oldMan: [
        {
          id: 0,
          type: 'image',
          url: 'https://lh3.googleusercontent.com/proxy/SmalBos0W-B_rEFlZRMpART2wH4gODFa9xx15yQG7H_YsJlXqgqtT6jZRinrR-q_v8z6j2g1coqE0WOh_gTIggfO3njH0EXFk-EFq1i9QhK9Nsc9x5FLpLo9SVR_hTZ9Tph0xB5xZmRZ'
        },
        {
          id: 1,
          type: 'image',
          url: 'https://pic1.zhimg.com/80/v2-76cb32a35469d652e90e245206c90e24_1440w.jpg'
        }
      ],
      pregnantWoman: [
        {
          id: 0,
          type: 'image',
          url: 'https://www.tripgotw.com/upload/article/original/7da99230d1679ea48f18e84f53d23333.jpg'
        },
        {
          id: 1,
          type: 'image',
          url: 'https://img.heho.com.tw/wp-content/uploads/2019/01/0114-%E9%81%8B%E5%8B%95%E7%9A%84%E5%AD%95%E5%A9%A6.png'
        }
      ],
      keepFit: [
        {
          id: 0,
          type: 'image',
          url: 'https://www.fe-amart.com.tw/images/amart/photo/gillchou/20160614-EXERCISE/10873786853_5564c767f4_o.jpg'
        },
        {
          id: 1,
          type: 'image',
          url: 'https://thumb.jfcdns.com/up/2016-10/201610191812484415424.jpg'
        },
        {
          id: 2,
          type: 'image',
          url: 'https://img.heho.com.tw/wp-content/uploads/2018/12/%E8%82%8C%E5%8A%9B%E8%A8%93%E7%B7%B4.png'
        }
      ]
    },
    contentList: {
      children: [
        {
          importantText: "不管是成人还是婴儿，健康都是最重要的事情，婴幼儿作为幼体就更应该注重健康才能更好的发育成长，以及婴幼儿健康与早期营养补充的关系，现在就为你娓娓道来：",
        },
        {
          importantText: "1.婴幼儿健康的重要性。婴幼儿时期处于人体生长发育的关键期，身长和体重是衡量婴幼儿营养状况的重要指标。随着经济的发展，生活水平的不断提高，婴幼儿的生长发育问题备受重视，父母们更是时刻关注，想尽办法确保其小孩的健康。但很多时候，过度的喂养却导致父母们“揠苗助长”，使婴幼儿出现肥胖和超重，具有比较严重的远期健康危害。"
        },
        {
          importantText: "2.早期营养及其生长发育对成年期患慢性疾病的风险有重要影响，婴幼儿的生长发育需要充足的营养来保证其体格、智力和免疫功能的发展。传统意义上对儿童的养育，往往追求“多、快、高、大”，在体格、智力、免疫功能方面给儿童的生长带来了一定的近期效益，但往往“过犹不及”，增加了远期的健康危害。"
        }
      ],
      teenagers: [
        {
          importantText: "青少年是指11岁至24岁这一阶段，统称青春期。又可分为青春发育期和青年期，该段时期的保健也很重要。",
        },
        {
          importantText: '1.健康心理素质。青少年处于心理上的“断奶期”，表现为半幼稚、半成熟以及独立性与依赖性相交错的复杂现象．具有较大的可塑性。他们热情奔放、积极进取，却好高骛远，不易持久，在各方面会表现出一定的冲动性。他们对周围的事物有一定的观察分析和判断能力，但情绪波动较大，缺乏自制力，看问题偏激。有时不能明辨是非。他们虽然仍需依附于家庭，但与外界的人及环境的接触亦日益增多，其独立愿望日益强烈，不希望父母过多地干涉自己。却又缺乏社会经验，极易受外界环境的影响。师长如有疏忽，往往误入歧途。针对青少年的心理特征，培养其健康的心理素质极为重要，可从以下三个方面着手。'
        },
        {
          importantText: '1．说服教育谆谆善诱 家长和教师要以身作则，为人师表，给青少年以良好影响，同时又要尊重他们独立意向的发展和自尊心，采用说服教育、积极诱导的方法，与他们交朋友谈心，关心他们的学习与生活，并设法充实和丰富他们的业余生活。有事多与他们商量，尊重他们的正确意见，逐渐给他们更多的独立权利，为他们创造一个愉快的、愿意讲话的环境，以便了解孩子的交友情况及周围环境的影响，探知他们的心理活动与情绪变化，从而有的放矢地予以教导和帮助。可以有意识有针对性地提出问题交给他们讨论。通过辩论以明确是非观念，再向他们提出更高的要求。要从积极方面启发他们的兴趣与爱好。激发他们积极进取、刻苦奋斗的精神，培养良好的个性与习惯。要教他们慎重择友，避免与坏人接触。要向他们推荐优秀书刊歹取缔不健康的读物。要鼓励他们积极参加集体活动，培养集体主义思想，逐渐树立正确的世界观和人生观，使他们有远大的理想与追求，集中精力长知识、长身体，在实际工作中锻炼坚强的意志和毅力，以求德智体美全面发展。对于他们的错误或早恋等问 题，不能采取粗暴、压制及命令的方式，仍要谆谆诱导。'
        },
        {
          importantText: '2．加强自身修养 青少年的身体发育虽已接近成人，可是对环境、生活的适应能力和对事物的综合、处理能力仍然很差。，青少年应该在师长的引导协助下。在自己所处的环境中，加强思想意识的锻炼和修养，力求养成独立自觉、坚强稳定、直爽开朗、亲切活泼的个性。遇事冷静，言行适度，文明礼貌，尊老爱幼，切忌恃智好胜，侍强好斗。要有自知之明，正确地 对待就业问题，处理好个人与集体的关系，明确自己在不同场合所处的不同位置，善于角色变换，采用不同的处事方法，从而有利于社交活动，促进人事关系的和谐，有益于身心健康人'
        },
        {
          importantText: '3．科学的性教育 贯穿于青春期的最大特征是性发育的开始与完成。正如《素问上古天真论》云：“丈夫…二八肾气盛，天癸至，精气溢泄”，“女子…二七而天癸至，任脉通， 太冲脉盛，且事以时下”。男女青年，肾气初盛。天癸始至，具有了生育能力。其心理方面的最大变化也反映在性心理领域，“性意识萌发，处于股陇状态。由于青年人的情绪易于波动，自制力差，若受社会不良现象的影响、常可使某些青年滋长不健康性心理，以致早恋础，荒废学业。有的甚至触犯刑法，走上犯罪道路。因此，青春期的性教育尤为重要。'
        },
        {
          importantText: '2.饮食调摄。青少年生长发育迅速，代谢旺盛。必须全面合理地摄取营养，要特别注重蛋白质和热能的补充。碳水化合物、脂肪是热能的主要来源，碳水化合物主要含于粮食之中，青少年应保证足够的饭量，增加粗粮在主食中的比例，并摄入适量的脂肪。女青年不应为减肥而过度节食，以致营养不良。男青年也不可自恃体强而暴饮暴食，饥饱寒热无度。对批天不足体质较弱者，更应抓紧发育对期的饮食调摄，培补后天以补其先天不足。'
        },
        {
          importantText: '3.良好生活习惯。青少年不应自传体壮、精力旺盛而过劳。应该根据具体情况科学地安排作息时间，做到“起居有时，不安作劳”。既要专心致志地工作、学习，又要有适当的户外活动和正当的娱乐休息，保证充足的睡眠。如此方能保证精力充沛。提高学习、工作效率，有利于身心健康。要养成良好的卫生习惯，注意口腔卫生。读书、写字、站立时应保持正确姿势，以促进正常发育，预防疾病的发生。变声期要特别注意保护好嗓子，还应避免沾染吸烟，酗酒等恶习，吸烟、酗酒不仅危害身体，而且影响心理健康如吸烟可使青年注意力涣散，记忆力减退，思辨不灵，学习效率降低。'
        },
        {
          importantText: '4.参加体育锻炼。持之以恒的体育锻炼，是促进青少年生长发育，提高身体素质的关键因素。要注意身体的全面锻炼，选择项目时，要同时兼顾力量、速度、耐力、灵敏度等各项素质的发展，重点应放 在耐力素质的培养上。力量的锻炼项目有短跑，耐力的锻炼项目有长跑、游泳等，灵敏的锻炼项目有跳远、跳高、球类运动，尤其是乒乓球。上述有些体育项目关系着几项素质的发展。如游泳，既可锻炼耐力，又可锻炼速度和力量，是青少年最适宜的运动项目。'
        }
      ],
      oldMan: [
        {
          importantText: "冬季是养生保健的好时节，相信很多的人都制定了自己的养生计划，尤其是老人更要关注自己的身体健康!子女们平时也要多多关心老人的身体哦，今天小编就给大家介绍一些相关的老人保健小常识，看看你们平时都了解多少呢?",
        },
        {
          importantText: "1.慢吸快呼。“任何影响呼吸的因素都会对健康和寿命造成负面影响。”你的呼吸也会影响到身体的其他生理功能，比如血压、心率、血液循环、体温等。"
        },
        {
          importantText: "学会呼吸的第一步就是放松腹部的肌肉。当腹部肌肉放松之后，最重要的就是给自己足够的时间，以恰当的方式把气体呼出来。例如，做到吸气的长度是呼气长度的2倍。"
        },
        {
          importantText: "2.学会加餐。研究显示，不吃大餐对身体健康是很重要的。所以，你应该学会加餐。首先，要了解自己的饥饿状态，每2～3个小时，吃一小顿饭。如果是外出吃晚餐，那么就吃一半，把剩下的带回家，作为稍后的夜宵。"
        },
        {
          importantText: "其次，多食用鱼类，且要选择较小的鱼类，比如野生或有机的鲑鱼、新鲜的沙丁鱼等。再次，不要忘记富含纤维素的食物，如全小麦食物、全燕麦食物、糙米饭等。最后，每天补充复合维生素，尤其要重视维生素D的补充。"
        },
        {
          importantText: "3.该睡就睡。多人已经有了根深蒂固的观点，那就是每天8小时睡眠才是对身体最好的。事情并不完全是这样，因为睡眠质量也有好坏之分。"
        },
        {
          importantText: "如果你需要闹钟才能起床;每天白天都需要打个盹;看书或看电影时会睡着或打瞌睡，都可能表明你没有高质量的睡眠。此时，建议你选择呼吸运动帮助入睡。同时，保持睡眠环境黑暗而安静。要记住，认真感觉自己的身体状况，当身体发出需要休息的信号时，一定要上床睡觉。"
        },
        {
          importantText: "老人养生中，保证心理健康亦是十分重要的，因为老年人如果晚年的人际交往好的话，就会心情舒畅，那么这样也是有利于老年人的身体健康的，关于老年人的心理健康问题，我们下面主要介绍几点关于心理健康的要点：1.重视人际关系和心理交流、2.保持乐观精神，培养健康的心理、3.善于摆脱烦恼，保持清心寡欲、4.注意饮食营养，加强体育锻炼、5.拓展丰富多彩的生活空间"
        },
        {
          importantText: "老人的健康是每个子女都非常在意的事情，都想给老人提供一个健康幸福的生活环境，所以平时就要多多了解这些老人保健的常识，这样才可以更好的照顾父母哦!"
        }
      ],
      pregnantWoman: [
        {
          importantText: "怀孕以后，肚里面多了一个胎宝宝，为了保证胎儿的绝对健康和安全，孕妈妈在工作、生活、娱乐等各个方面都要注意，不能随便用药，也不要长期在电脑等辐射物体旁边工作，而且要定时看医生做体检。那么究竟怀孕初期应注意什么？"
        },
        {
          importantText: "一、不要随便用药谨遵医嘱。目前已被证实对胚胎有影响的药物。包括抗癫痫药物。某些精神科用药。某些特别种类的抗生素等等。这些药物被证明直接对胚胎有影响。而其他药物影响虽不明显。但仍要谨慎使用。一般医师都有药物手册，其中记载各种用药的分级和对胎儿的影响。其分类如下：A级:目前临床实验证实对胎儿无害。B级:动物实验证实对胎儿没有致死性的或不良的反应。人体实验尚无报告。C级:动物实验证实对胎儿有不良的反应。人体实验尚无报告。但必要时可用。D级:目前临床实验证实对胎儿有不良的影响。但在危及母体生命情况下可用。X级:目前临床实验证实对胎儿有不良的影响。绝对禁止使用。"
        },
        {
          importantText: "由于怀孕初期正处于胎儿脑部。神经管。器官发育时期。因此对于药物使用更须谨慎。一般妇产科的用药是可以信任的(例如感冒请妇产科医师开给药物),而其他科如果是正牌医师。告知已怀孕。所开给的用药也应是可以信任的,而没有牌照的医师或一些药房所给予的用药。即使其表示对胎儿无害。也不可听信。"
        },
        {
          importantText: "另外。中药的使用也要特别当心。因为中药是复方药物。对于胎儿的影响不容易被察觉。而许多民众仍存有怀孕时须以中药补身的观念。如果随便到药房抓药使用。对胎儿可能有不良的影响,例如有孕妇听信人言。未经合格中医师诊断即使用胎儿美白中药。结果造成胎儿心脏外露的遗憾。坊间中药房林立。在使用中药材前。仍应请合格中医师诊断。以避免造成无谓的伤害。"
        },
        {
          importantText: "二、远离放射线，少做X光。怀孕时应避免做放射性检查。目前并没有正确的统计。照了多少张X光片会致畸胎。但可以想见的是。照的次数愈多影响愈大。尤其是比较高剂量的辐射。例如核医检查。电脑断层扫描。在已知怀孕后都应避免。但如果因为未知怀孕而照了一张X光片。则与前述服用感冒药一样。不须因此而将胎儿流掉。需待日后的产检来观察。"
        },
        {
          importantText: "孕妇若已知怀孕应尽量避免药物与放射线的伤害。但若因为未知怀孕而已经有了接触。也不要不断自责。应做好日后的产检。确定是否对胎儿有伤害。在怀孕24周前决定流掉或留住胎儿。"
        },
        {
          importantText: "三、不可小看怀孕期间出血。造成怀孕早期出血的原因如下："
        },
        {
          importantText: "1.子宫外孕。子宫外孕是指胚囊没有着床在子宫里面。而着床在子宫外。在宫腔外着床的孕体。不能正常的发育。体内雌。孕激素的比例发生变化。造成蜕膜分离。导致不规则的*道出血。子宫外孕要尽速处理。否则等胚胎愈来愈大就愈危险。甚至会因为子宫外孕破裂大出血而丧命。所以如果验出有怀孕。却一直有出血现象。就要前往妇产科检查。以确定是否为子宫外孕或其他问题。"
        },
        {
          importantText: "2.流产。一旦早期怀孕有出血等流产现象。在确定了宫内胎后会开给药物以帮助安胎。早期所给与的安胎药物是黄体素。可帮助胎盘着床紧密以避免流产。另外。有发炎现象也会导致流产。当阴道分泌物增加。阴道搔痒。有恶臭味。颜色偏黄时。即已发炎。不管是尚未怀孕或怀孕初期。如有发炎现象。须就医将病症治愈。否则未来可能引起早产。甚至流产。而约有一半的流产是源于染色体异常。人体有排斥现象会将异常的染色体排掉。这是自然淘汰。应以平常心视之。"
        },
        {
          importantText: "3.孕妇太劳累。孕妇如果因为平常太劳累。工作压力大。每次出现少量的出血。只要多卧床休息。即可改善症状。虽然卧床休息是最佳的安胎方法。但在初次发现有出血现象时。最好还是请医师辨明症状。以免错失治疗时机。"
        },
        {
          importantText: "怀孕初期的注意事项其实非常多，希望以上孕知识能够帮助到各位准妈妈。"
        }
      ],
      keepFit: [
        {
          importantText: "健身锻炼是我们应该坚持一生的，健身锻炼可以帮助我们增强抵抗力，在心理上能帮助我们缓解压力，舒缓身心，因此健身的好处有很多。想要做好健身运动就要了解健身常识，本文主要为大家介绍14个健身常识，及夏季健身注意事项。"
        },
        {
          importantText: "一、一天最佳的锻炼时间：上午9点，下午3点，晚上7点左右。"
        },
        {
          importantText: "二、最常用的健身器械是什么：哑铃，最简单、实用的健身器械，可以锻炼身体的各个部位的肌肉。"
        },
        {
          importantText: "三、关于哑铃如何选择。我们在使用哑铃锻炼的时候应该注意质量，及重量的选择，不同人群适合不同的哑铃。市面上常见的哑铃品种有包胶哑铃、包铸铁哑铃、电镀哑铃、烤漆哑铃。"
        },
        {
          importantText: "包胶哑铃指的是全胶结构，价格相对电镀哑铃低。普通包胶多用回收塑料制成，有刺激性气味时间长容易变质，不利健康。优质包胶多用沥青制成，气味较小。由于现在做工精细很难区分普通包胶和优质包胶。包铸铁哑铃是外层包胶，内部使用铸铁块。外层包胶同样有普通包胶和优质包胶之分，同重量体积相对包胶哑铃小，价格实惠。电镀哑铃价格相对于包胶哑铃高些。电镀哑铃颜色鲜艳，永不退色，无刺激性气味，一般家庭健身使用。烤漆哑铃是优质铸铁电镀后，采用烤漆工艺完成的。烤漆哑铃外形更加美观，价格相对于电镀哑铃较高，适合专业健身中心使用。"
        },
        {
          importantText: "四、初级健身者一周锻炼几次：一周3次，隔天一次，给肌肉充分的休息时间。"
        },
        {
          importantText: "五、三大力量锻炼动作是什么：三大力量锻炼动作是卧推、深蹲、硬拉。"
        },
        {
          importantText: "六、肌肉锻炼后的修复时间：肌肉锻炼后的修复时间最好是48-72小时。"
        },
        {
          importantText: "七、肌肉的增长原理是什么：力量锻炼对肌肉的刺激，在休息和营养的补充过程中达到超量恢复。"
        },
        {
          importantText: "八、健身动作要保持正确性：只有健身动作的正确性，才能锻炼到目标肌肉，并在锻炼中感受目标肌肉的发力过程，使健身达到事半功倍。"
        },
        {
          importantText: "九、初级健身者以什么动作为主：复合训练动作。"
        },
        {
          importantText: "十、8RM的重量是什么意思：某个动作每组只能做8次的重量。"
        },
        {
          importantText: "十一、动作次数与健身的关系：每组1～4次主要增长绝对肌力和体力，6～12次主要增长肌肉围度，16～20次主要发达小肌肉群和增进肌肉线条弹性，25次以上主要用于减脂、增强心肺功能、健身塑形等。"
        },
        {
          importantText: "健身运动的好处"
        },
        {
          importantText: "“生命在于运动”这是至理名言，坚持运动能够帮助我们延长寿命这是真的。体育运动是健身的法宝，增寿的诀窍。从强身健体的意义上讲，任何人都需要锻炼，对于老年朋友来说，生理功能逐渐衰退，健康状况逐渐变差，各种慢性病接踵而来，也就更需要参加健身运动。"
        },
        {
          importantText: "专家们认为，人的寿命长短，有15%～20%取决于遗传因素，有80%～85%取决于非遗传因素。遗传因素是不可改变的，而非遗传因素，诸如生活环境、生活方式、医疗保健、体育锻炼等，取决于人类自己，尤其是体育锻炼，个人可以通过体育锻炼达到推迟衰老、延年益寿的目的。"
        },
        {
          importantText: "健身能够美化身体外貌;提高适应性;巩固人与社会的联系;改进人的个性;改善身体姿势;延缓衰老过程;放松身体;有助于控制情绪消沉;有益于保持情感的稳定;可以得到良好的睡眠;使人能更有效地工作;能够很好地适应和应付生活中的紧张场面;使人们能从疲劳中尽快解脱出来;调节改善全身各系统器官的功能;重新调配全身的血液;改善全身的氧气供应;保持身体肌肉的体积和重量;给大脑提供更多的血液，使人精神更为活跃;防止心脏病、冠心病、癌症和关节炎;调节和降低胆固醇和三酰甘油的水平;加强心肌的力量，保持动脉的弹性和活动;降低血压;缩短血液凝固的时间;增加血红蛋白的数量和血容量;促进有规律的肠蠕动，防止便秘;加速从疾病和伤痛中恢复;有助于自救(预防意外事故和外伤);调节消化中枢，因而可控制过量饮食、情绪、情感和体重;帮助消化;增加高密度脂蛋白;减少皮肤感染;提高内分泌功能。"
        },
        {
          importantText: "只有运动，才能使人的心、肺等器官以及循环、消化、内分泌等系统得到充分锻炼;只有运动，才能使神经系统反应灵敏、动作协调，肌肉、骨骼系统强健有力;只有运动，才能使体内各种功能得到充分发挥。"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let crowdId = options.id
    console.log(crowdId)
    switch(crowdId){
      case "0":
        this.setData({
          pageTitle: "婴幼儿健康小知识",
          swiperImgList: this.data.swiperImgList['children'],
          contentList: this.data.contentList['children'],
          blockTitle: "关于婴幼儿的健康"
        })
      break;
      case "1":
        this.setData({
          pageTitle: "儿童青少年健康小知识",
          swiperImgList: this.data.swiperImgList['teenagers'],
          contentList: this.data.contentList['teenagers'],
          blockTitle: "关于儿童青少年的健康"
        })
        break;
      case "2":
        this.setData({
          pageTitle: "老年人健康小知识",
          swiperImgList: this.data.swiperImgList['oldMan'],
          contentList: this.data.contentList['oldMan'],
          blockTitle: "关于老年人的健康"
        })
        break;
      case "3":
        this.setData({
          pageTitle: "孕妇健康小知识",
          swiperImgList: this.data.swiperImgList['pregnantWoman'],
          contentList: this.data.contentList['pregnantWoman'],
          blockTitle: "关于孕妇的健康"
        })
        break;
      case "4":
        this.setData({
          pageTitle: "健身小知识",
          swiperImgList: this.data.swiperImgList['keepFit'],
          contentList: this.data.contentList['keepFit'],
          blockTitle: ""
        })
    }
  }
})