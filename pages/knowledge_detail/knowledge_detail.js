// pages/knowledge_detail/knowledge_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [
      {
        id: "0",
        title: "高血脂让全身都遭殃，这些危害你应该知道!",
        content: [
            { text: "我们生活中说到的血脂是血液检查指标中的一种，高血脂和高血压、高血糖三者就是我们常常说的三高。不要以为血脂就是血液中的脂肪，虽然这个指标和体重有关系，但并不存在一定关系，很多人体重并不超标，但是同时也有高血脂的问题。高血脂不是件小事儿，严重了会引发动脉硬化、心脏病、脑血管疾病，可以说我们常见的心脑血管疾病和血脂的异常有很大的关系，所以一旦发现血脂异常一定要及时干预。"},
            { text: "高血脂会引起动脉粥样硬化，因为我们血管是全身主要分布的，不管心、脑、肾还是外周肢体，都是有很重要的血管来供应血液，以维持以及人体进行正常的身体健康机能。目前来说我们国家现在也是动脉粥样硬化比例非常高的，而防动脉硬化关键的一点就是稳住血脂。"},
            { text: "当脂肪进入血管内皮细胞，通过一系列的逐步演变斑块形成，斑块形成导致血管堵塞。该血管阻塞后，减少了对身体的血液供应可导致功能障碍甚至萎缩。在有这种斑块的特点的同时，斑块不稳定是相当于我们打荷包蛋，蛋黄可能是脂质，外面是一些程成纤维细胞或者其他的纤维帽，如果这个“蛋黄”煎得比较老就不容易破裂，如果这个“蛋”比较嫩的话很容易破裂，一旦破裂以后“蛋黄”暴露在血管里面，在血管里面非常容易导致血栓形成。"},
            { text: "因此，有因斑块破裂出现心肌梗塞，中风和突发性肾功能衰竭，下肢动脉闭塞等很多都是斑块破裂导致的疾病，可能会带来致命的威胁。"},
            { text: "另外高血脂对消化信息系统设计也是我们一个具有很大的损害，经过B超普及以及以后，可以通过看到中国百分之五六十的患者进行或者成年人患者之间存在脂肪肝，这种脂肪肝往往可能是因为脂肪细胞代谢的紊乱，沉积在肝脏里面渐渐的会影响肝脏功能，进一步提高发展需要引起肝硬化从而直接导致不可逆的损害。还有就是一些高血脂，血脂过高可引起脂肪栓塞，是很少见的。总之，主要的危害社会还是在于心脑血管，其次是消化处理系统的脂肪肝。"},
            { text: "首先要判断血脂是否偏高，要判断血脂降低的程度，如正常人群，血脂达到相对正常程度即可。其他疾病包括冠心病或高血压或肾脏疾病的患者需要较低的血脂标准。"},
            { text: "如果高血脂患者同时伴有心脑血管类的症状，我们需要药物干预。其西药主要是他汀类，贝特类等的一些药物，中国医学的有也有一些药物对降血脂有比较好的作用。"},
            { text: "所以对于药物是一方面的治疗，在药物治疗的同时坚持饮食运动方法也是非常有必要的，超重的患者这时候要适当的减轻体重，坚持健康绿色的饮食习惯，做一些太极、慢跑、网球等有氧运动。"}
        ],
        imageSrc: 'http://sucai.qm120.com/image/2020/05/12/114205_20199.jpg',
        contentTitleImage: 'http://sucai.qm120.com/image/2020/05/12/20200512114052_55218.jpg'
        // types: []
      },
      {
        id: "1",
        title: "要想避免动脉硬化，生活中5个恶习需改变！",
        content: [
          {
            text: '血管硬化我们常常会混淆两个概念，大多数人都觉得动脉粥样硬化和动脉硬化是一回事儿，其实是有所区别的，动脉硬化是随着年龄增长的一种正常的生理现象，是随着年龄自然老化的一种现象，是血管衰老的结果，其实大多数人的血管都是一直处于老化的进程中，只不过是到了中老年时期才让血管的老化变的更加迅速而已。'
          },
          {
            text:"动脉粥样硬化则不然，它是作为一种病理性的血管发展变化，是由于有大量脂肪堆积在了血管壁中，改变了自己原有的血管系统结构，影响到了促进血管作用发挥功能，从而会导致一系列相关疾病比如冠心病、脑梗塞、心肌梗塞等的发生。"
          },
          {
            text: "因些，动脉粥样硬化的发生，不能停止，但它可以延迟这种进展情况;如果想要避免动脉粥样硬化的发生，从培养良好的生活习惯开始，从一开始，我们应该注意生活小细节，如："
          },
          {
            text: "①坚决不吸烟，烟中的有害物质对血管的损害影响非常大，就类似于一块铁不加保护地放置在空气中，如果没有空气环境污染问题严重、时常会下点酸雨也是一样，铁块必定会加速生锈，吸烟会导致中国动脉硬化提早及加速发生，特别是对于导致患者动脉粥样硬化过程中发生危险的因素理论之一。"
          },
          {
            text: "②尽可能少饮酒，这是非常不健康的生活习惯之一，越来越多的研究证实，避免酒精对身体，特别是血管的损害的方法是不喝酒。人们常说“少喝酒能活血化瘀”，其实这种促进血液循环的作用是建立在血管损伤的暂时结果上的，从长远来看是不值得的。如果你真的想喝酒，你也应该控制每天的酒精摄入量不超过25克，以尽量减少饮酒的危害。"
          },
          {
            text: "③避免亚健康状态，近年来越来越多的中青年人患有高血压、糖尿病和高尿酸，这些疾病可导致动脉粥样硬化和斑块，导致心脑血管疾病，这种不良习惯扰乱了人体的自然生理节律。全身组织器官从“劳累过度”到“亚健康”再到“疾病”都大大加速了这一过程的进展。"
          },
          {
            text: "④多做运动，避免久坐，人体其实和机器一样，一旦不动就容易“生锈”，长期不动则各个零部件之间配合度降低，久而久之机器就会停摆。对人体来说也是这样，经常不断地运动能够刺激和增强血管收缩功能，以保持“年轻态”的血管，以避免发生粥样硬化病变。"
          },
          {
            text: "⑤合理进行一日三餐，比如含碳水化合物的主食摄入过多，血糖管理水平明显升高，不断发展刺激胰岛细胞通过分泌胰岛素内部控制以及血糖，长期处于超负荷分泌从而导致胰岛细胞结构损伤问题引起高血糖、糖尿病风险发生;吃得过咸，使血液渗透压升高将周围社会组织中水分“吸入”血液增大血容量引起血压的升高等等，都会致使机体代谢紊乱而发生糖尿病、高血压损伤血管。"
          }
        ],
        imageSrc: 'http://sucai.qm120.com/image/2020/05/11/110710_16835.jpg',
        contentTitleImage: 'http://sucai.qm120.com/image/2020/05/12/20200512114052_55218.jpg'
      },
      {
        id: "2",
        title: "高血压患者的饮食禁忌有哪些 ,答案全在这里了",
        content: [
          { text: "在我们生活中，有很多人患有高血压，随着社会竞争日益激烈，高血压的患病人群越来越年轻化。高血压作为一种慢性病，它的形成是经常长时间的不良习惯引起的，所以想治疗和预防高血压，一定要调整自己不健康的生活作息和饮食状况。下面为大家介绍一下高血压患者的饮食禁忌，一起来了解一下吧。"},
          { text: "1、高热能食物：高血压患者不要食用高热能食物。高热能食物可诱发肥胖,肥胖者高血压发病率比正常体重者高。高血压患者多合并有超重或肥胖。所以,本病患者饮食上应限制高热能食物。"},
          { text: "2、肉类：高血压患者不吃或者少吃肉类。这类食品含脂肪高,虽然是高蛋白,但饱和脂肪酸含量很高,容易造成血液中血脂过高,诱发冠心病。"},
          { text: "3、胀气的食物：高血压患者一定要少吃胀气的食物。像番薯、干豆类容易导致胀气的食品,高血压患者还是少吃为妙,另外味道浓重的饼干,由于糖盐含量过高,因此还是少吃。"},
          { text: "4、鸡汤：高血压患者不要喝鸡汤。鸡汤的营养价值很高,而多喝鸡汤又会使胆固醇和血压增高。因此,鸡汤不能盲目地作为病人的营养品,特别是患有高血压的人,不宜喝鸡汤。否则只会进一步加重病情,对身体有害无益。"},
          { text: "5、含有钾、钙丰富的食物：高血压不要食用含有钾和钙的食物。控制钠盐摄入量有利于降低和稳定血压,在饮食中应减少烹调用盐,每人每日以不超过6g为宜。多吃含钾、钙丰富而含钠低的食物,含钾丰富的食物有:土豆、芋头、茄子、莴笋、海带、冬瓜、西瓜、柑橘等。含钙丰富的食物有:牛奶、酸奶、虾皮、芝麻酱、绿色蔬菜等。"},
          { text: "6、烟酒：高血压患者禁忌烟酒。烟、酒是高血压的危险因素,嗜好烟、酒的人更容易发生高血压心脑血管病变,而且烟、酒还能降低高血压患者对药物的敏感性。"}
        ],
        imageSrc: 'https://pics3.baidu.com/feed/d1a20cf431adcbef4dde6852c37e88dba1cc9fd7.jpeg?token=e195aac81f2f4c998e91075d21753cfe',
        contentTitleImage: ''
        // types: []
      },
      {
        id: "3",
        title: "你知道甲鱼的功效和饮食禁忌吗？赶紧过来看看吧",
        content:[
          { text: "说起甲鱼相信大家都不陌生，这里说的甲鱼也被称为鳖，通常被人称为水鱼、王八等，是两栖爬行动物之一。甲鱼的营养价值很高，是人们餐桌上的大补食材，下面就给大家说一说甲鱼的功效作用和饮食禁忌，感兴趣的朋友一起来看看吧。"},
          { text: "甲鱼的功效与作用"},
          { text: "1.降压降脂：甲鱼可以降压降脂。甲鱼中含有亚油酸，能缓和减轻胆固醇沉积、防止动脉硬化。有很好的净血作用，对高血压、冠心病患者有益。"},
          { text: "2.抗癌抑癌：甲鱼可以抗癌抑癌。甲鱼肉及其提取物能有效地预防和抑制肝癌、胃癌、急性淋巴性白血病，并用于防治因放疗、化疗引起的虚弱、贫血、白细胞减少等症。"},
          { text: "3.养颜护肤：甲鱼有养颜护肤的功效。龟板胶是大分子胶原蛋白质，含有皮肤所需要的各种氨基酸，有养颜护肤、美容健身之效。当然，龟板是中药，应该由医生视具体的情况决定是否使用。"},
          { text: "4.补虚壮阳：甲鱼可以补虚壮阳。甲鱼还能“补劳伤，壮阳气，大补阴之不足”。食甲鱼对肺结核、贫血、体质虚弱等多种病患亦有一定的辅助疗效。"},
          { text: "5.提高免疫力：甲鱼可以提高免疫力。甲鱼富含动物胶、角蛋白、铜、维生素D等营养素，能够增强身体的抗病能力及调节人体的内分泌功能，也是提高母乳质量、增强婴儿的免疫力及智力的滋补佳品。"},
          { text: "6.预防贫血：甲鱼可以预防贫血。甲鱼中含有铁元素，能旺盛造血功能，对于患有肺结核、贫血、体质虚等病症的患者有一定的辅助疗效。"},
          { text: "甲鱼的禁忌"},
          { text: "1.禁忌人群：甲鱼虽然功效作用很多，但有一定的禁忌人群。甲鱼滋腻，久食败胃伤中，导致消化不良，食欲不振、消化功能减退、孕妇或产后虚寒、脾胃虚弱腹泻之人忌食；患有慢性肠炎、慢性痢疾、慢性腹泻便溏之人忌食；肝炎患者食用会加重肝脏负担，严重时值诱发肝昏迷，故应少食。"},
          { text: "2、食用禁忌：甲鱼的食欲禁忌，大家一定不要忽视。甲鱼不宜与桃子、苋莱、鸡蛋、猪肉、兔肉、薄荷、芹菜、鸭蛋、鸭肉、芥末、鸡肉、黄鳝、蟹一同食用。死甲、变质的甲鱼不能吃；煎过的鳖甲没有药用价值。"},
          { text: "生甲鱼血和胆汁配酒会使饮用者中毒或罹患严重贫血症。以上就是关于甲鱼功效作用、甲鱼的禁忌人群、甲鱼食欲禁忌的相关内容，看到这里相信大家对于甲鱼有了一个全面的认识和了解了。甲鱼的功效作用很多，对人体保健有诸多好处，但甲鱼也有一定的禁忌，大家在食用时一定要多多注意。"}
        ],
        imageSrc: 'http://5b0988e595225.cdn.sohucs.com/images/20190418/7b77e2caa6684eeda19bc0f49db62add.jpeg',
        contentTitleImage: 'https://z.xiziwang.net/uploads/allimg/190106/39_190106194208_1.jpg'
        // types: []
      },
      {
        id: "4",
        title: "自身免疫力低，你一定要多吃这几种蔬菜",
        content: [
          { text: "社会经济的日益发展，除了给大家带肋方便快捷的生活以外，相对的增加了人们工作和生活的压力。人们工作压力大工作繁忙，导致很多人没有充足的睡眠，没有健康的饮食，长此以往会造成自身免疫力低下的问题。那么在饮食方面我们可以吃哪些食物来帮助我们调节身体，增加免疫力呢？今天我们来聊一聊增加免疫力的食物有哪些。"},
          { text: "增加免疫力的食物"},
          { text: "1、花椰菜：花椰菜可以增强自身免疫力。花椰菜含丰富的维生素、矿物质等。还含有多种生物碱类、黄酮类化合物、硫代葡萄糖苷等活性成分。且花椰菜是含有类黄酮最多的食物之一，能提高机体的免疫力，可防止感冒和坏血病的发生。"},
          { text: "2、深水鱼：深水鱼可以增强自身免疫力。很多人就会比较的纳闷，会问，为什么深海鱼也会增强抵抗能力呢，其实研究报告指出，鱼油中的Omega-3脂肪酸有常用的抗忧郁药如碳酸锂的类似作用。"},
          { text: "3、娃娃菜：娃娃菜可以增强自身免疫力。据测定，每百克娃娃菜中约含有287毫克的钾，而同样重量的白菜仅含钾130毫克。钾是维持神经肌肉应激性和正常功能的重要元素，经常有倦怠感的人多吃点娃娃菜可有不错的调节作用。"},
          { text: "4、菠菜：菠菜可以增强自身免疫力。菠菜就不用说了，很多人都比较的喜欢吃，尤其是对于女性而言是有很大的好处的。菠菜除含有大量铁质外，更有人体所需的叶酸。缺乏叶酸会导致精神疾病，包括抑郁症和早发性痴呆等。叶酸不足超过5个月的人会无法入睡，并产生健忘和焦虑等症状。"},
          { text: "5、蜂蜜：蜂蜜可以增强自身免疫力。你的食物或饮料中加上一匙蜂蜜，能够提升你的天然抵抗力。因为蜂蜜有极好的抗菌消炎作用。长期服用，能提高免疫力，预防细菌病毒感染。"},
          { text: "6、蘑菇：蘑菇可以增强自身免疫力。菌类食物富含蛋白质，并且含有铁、锌、钙等多种微量元素，脂肪含量低，还含有人体必需的氨基酸、生物活性物质，能够调节免疫，对维护人体健康起着很重要的作用。"},
          { text: "7、红萝卜：红萝卜可以增强自身免疫力。萝卜含有丰富的淀粉分解酶以及大量的维生素C和微量元素锌，能够增强机体的免疫功能，提高抗病能力，避免身体受到细菌的入侵。"},
          { text: "8、葡萄柚：葡萄柚可以增强自身免疫力。葡萄柚不但有浓郁的香味，更可以净化繁杂的思绪，提神醒脑。葡萄柚所含的高量维生素C，不仅可以使身体有抵抗力，还可以抗压。最重要的是，在制造多巴胺、正肾上腺素时，维生素C是重要成分之一。"}
        ],
        imageSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2332650743,733295242&fm=26&gp=0.jpg',
        contentTitleImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589290086591&di=a7928b9183b668451229e21ac70bdc8e&imgtype=0&src=http%3A%2F%2Fxiaomi.wstmart.net%2Fupload%2Fimage%2F2016-10%2F5804462074fcc.jpg'
        // types: []
      },
      {
        id: "5",
        title: "如何辨别真假土猪肉，土猪肉和普通猪肉有哪些区别？",
        content: [
          { text: "现在大家对于一些食材越来越讲究，不管是土鸡还是土鸡蛋，土猪肉等越来越受大家的欢迎，这些所谓的土鸡土猪肉就是散养在农家里的，不是大范围通过饲料养殖的。这些土鸡土猪因为平时食用都是绿色环保的食物，所以它们的肉也会更健康。今天一起看看如何辨别真假土猪肉，土猪肉和普通猪肉有哪些区别。"},
          { text: "土猪肉是什么：我们常吃土鸡肉，土鸡蛋，那也会有土猪肉了，那究竟土猪肉是什么呢？土猪肉其实也就是猪肉，和土鸡肉一样，是喂养粮食长大的，一般土猪是散养在农户家里，吃米糠以及剩饭长大的，因为更绿色环保，更健康，因此十分受人们的欢迎。 "},
          { text: "怎样辨别真假土猪肉：如何分辨真假土猪肉呢？现在主妇网小编就教大家几招，以后大家就不用担心会被那些为了获取更多利润的不法商贩欺骗了。"},
          { text: "绶带鸟大家要先看一下猪皮的薄厚，土猪肉的皮会比杂交饲料猪肉的肉皮厚0.1，0.2厘米，一般土猪肉的皮厚度在0.4至0.5厘米间。土猪肉的颜色会更鲜红，而杂交饲料猪的瘦肉颜色会更白一点。土猪肉皮下脂肪也会比杂交饲料猪更厚，土猪肉皮下脂肪厚度一般在4至5厘米间。而且土猪肉的毛孔更大。 土猪肉和普通猪肉的区别：土猪肉皮厚不肥，非常瘦，烹煮熟之后更鲜香。宰杀之后的土猪肉的猪皮白种发青，瘦肉肉质特别细腻，颜色是鲜红色。而且土猪肉更有弹性，口感也会更鲜香有嚼劲。"}
        ],        
        imageSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589290708129&di=e6be7c05f662eb8933fcd85abdd2672a&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D449199374%2C3638626548%26fm%3D214%26gp%3D0.jpg',
        contentTitleImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589290707661&di=0b4b59118113033a1e0c62ce85de66d9&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161213%2Ff4496899a54345708851153dc6738e06_th.jpeg'
        // types: []
      },
      {
        id: "6",
        title: "丑橘不仅味道鲜美，它的功效作用也很多",
        content: [
          { text: "在人们的日常生活中，为了身体健康保持营养均衡，大家会食用一些水果，比如苹果、香蕉、丑橘等。丑橘是目前市场常十分畅销的水果之一，不仅味道鲜美而且营养丰富，深受大家的喜欢。那么丑橘的功效与作用有哪些呢？下面一起来了解一下。"},
          { text: "丑橘的功效与作用 "},
          { text: "1.润肠通便：丑橘可以润肠通便。丑橘中膳食纤维的含量很高，食用之后会在胃肠内大量吸水膨胀，增加食物残渣湿度，促进胃肠蠕动，对缓解便秘有一定作用。"},
          { text: "2.消除疲劳：丑橘可以消除疲劳。丑橘中含有大量的维生素C和蛋白质，脂肪等营养成分，食用丑橘可以增加人体细胞的活性程度，缓解身体疲劳现象。"},
          { text: "3.预防高血压和动脉硬化：丑橘可以有效预防高血压和动脉硬化。丑橘还能预防高血压，也能减少动脉硬化发生，它含有的天然果胶和芦丁等营养成分，能增加人体血管韧性和通透性，能促进血液循环，清除血管壁上的胆固醇，它能在维持血压稳定的同时，防止血管老化僵化，从而也就减少了动脉硬化以及冠心病的发生。"},
          { text: "4.美容抗老：丑橘可以美容抗老。吃丑橘可以美容抗老，丑橘营养丰富，对我们人体需要的营养元素非常有帮助。丑橘不仅食用效果好，还可以打成果泥敷面膜使用，能够让肌肤更加细腻光滑起来。"},
          { text: "5.化痰理气：丑橘可以化痰理气。丑橘性凉，主要归肺、脾和胃经，有化痰、理气和缓解胸闷等作用。主要用于胸隔结气、脾胃气滞、胸腹胀闷、肺热咳嗽等症状。"},
          { text: "6.防癌降压：丑橘还有防癌降压的功效作用。吃丑橘可以有助于防癌降压，丑橘中的营养丰富，清热解毒的效果也很好。每天坚持食用些丑橘，有效抑制人体自由基生成，极大程度的帮助我们防癌抗癌。"},
          { text: "7.消食：丑橘可以消食。丑橘具有消食下气、去油腻的功效，适宜在饭后半小时食用，对呕逆少食、消化不良均有效。而且丑橘所含有的大量维生素，有助醒酒解毒。"},
        ],
        imageSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589290394017&di=c605fa11df661da4f064ece0836383a4&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn12%2Fjfs%2Ft3916%2F3%2F2180588443%2F430755%2F335b1cb5%2F58a40cffN94d3f5b2.jpg',
        contentTitleImage: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3231946658,1363318608&fm=26&gp=0.jpg'
        // types: []
      },
      {
        id: "7",
        title: "睡觉打鼾吃什么好？",
        content: [
          { text: "社会经济的日益发展，除了给大家带肋方便快捷的生活以外，相对的增加了人们工作和生活的压力。人们工作压力大工作繁忙，导致很多人没有充足的睡眠，没有健康的饮食，长此以往会造成自身免疫力低下的问题。那么在饮食方面我们可以吃哪些食物来帮助我们调节身体，增加免疫力呢？今天我们来聊一聊增加免疫力的食物有哪些。"},
          { text: "增加免疫力的食物"},
          { text: "1、花椰菜：花椰菜可以增强自身免疫力。花椰菜含丰富的维生素、矿物质等。还含有多种生物碱类、黄酮类化合物、硫代葡萄糖苷等活性成分。且花椰菜是含有类黄酮最多的食物之一，能提高机体的免疫力，可防止感冒和坏血病的发生。"},
          { text: "2、深水鱼：深水鱼可以增强自身免疫力。很多人就会比较的纳闷，会问，为什么深海鱼也会增强抵抗能力呢，其实研究报告指出，鱼油中的Omega-3脂肪酸有常用的抗忧郁药如碳酸锂的类似作用。"},
          { text: "3、娃娃菜：娃娃菜可以增强自身免疫力。据测定，每百克娃娃菜中约含有287毫克的钾，而同样重量的白菜仅含钾130毫克。钾是维持神经肌肉应激性和正常功能的重要元素，经常有倦怠感的人多吃点娃娃菜可有不错的调节作用。"},
          { text: "4、菠菜：菠菜可以增强自身免疫力。菠菜就不用说了，很多人都比较的喜欢吃，尤其是对于女性而言是有很大的好处的。菠菜除含有大量铁质外，更有人体所需的叶酸。缺乏叶酸会导致精神疾病，包括抑郁症和早发性痴呆等。叶酸不足超过5个月的人会无法入睡，并产生健忘和焦虑等症状。"},
          { text: "5、蜂蜜：蜂蜜可以增强自身免疫力。你的食物或饮料中加上一匙蜂蜜，能够提升你的天然抵抗力。因为蜂蜜有极好的抗菌消炎作用。长期服用，能提高免疫力，预防细菌病毒感染。"},
          { text: "6、蘑菇：蘑菇可以增强自身免疫力。菌类食物富含蛋白质，并且含有铁、锌、钙等多种微量元素，脂肪含量低，还含有人体必需的氨基酸、生物活性物质，能够调节免疫，对维护人体健康起着很重要的作用。"},
          { text: "7、红萝卜：红萝卜可以增强自身免疫力。萝卜含有丰富的淀粉分解酶以及大量的维生素C和微量元素锌，能够增强机体的免疫功能，提高抗病能力，避免身体受到细菌的入侵。"},
          { text: "8、葡萄柚：葡萄柚可以增强自身免疫力。葡萄柚不但有浓郁的香味，更可以净化繁杂的思绪，提神醒脑。葡萄柚所含的高量维生素C，不仅可以使身体有抵抗力，还可以抗压。最重要的是，在制造多巴胺、正肾上腺素时，维生素C是重要成分之一。"},
        ],
        imageSrc: 'http://images.meishij.net/p/20170112/1ad9fa73e229b80ba8956f3b83052431.jpg',
        contentTitleImage: 'https://pics0.baidu.com/feed/6a600c338744ebf879fa176ad760432c6159a77f.jpeg?token=110747ccf4e23b7bfab46fd65bad0086'
      },
      {
        id: "8",
        title: "吃货必备！教你怎么越吃越瘦",
        content: [
          { text: "吐槽1：吃饱这一餐，就在等待下一餐，三餐不饱，容易吗，容易吗? "},
          { text: "少吃一餐的你，少吃的是哪一餐?如果少吃的是“早餐”，那难怪瘦不下来啦!  “早餐”是一天当中的第一顿正餐，最重要的一餐，而且是可以放心尽量吃的一餐。从昨天晚餐后到今天早餐前，已经空腹将近12小时的肚子，特别需要吃一顿丰盛的早餐来唤醒还在赖床的五脏六腑，帮助启动一整天的新陈代谢并补充身体能量!少吃了一餐，结果挨不到下一餐肚子就咕噜咕噜在作祟，这个时候忍不住吃下的几块饼干或蛋糕，说不定热量都比吃一顿正餐还来得高呢!就算你真的辛苦熬到下一餐，也可能因为饥饿感而吃下更多的食物!"},
          { text: "总而言之，不要以为少吃一餐就能变瘦，一整天加起来的热量才是变胖或变瘦的真相。"},
          { text: "吐槽2：为了减肥，从白骨精变成白兔精了，木有肉吃的日子，只有身上的肉肉陪着我! "},
          { text: "肉类脂肪多?肉类热量高?不让你多吃，也没让你不吃啊!减肥的时候，适当吃点肉，补充点蛋白质、脂肪，可以维持身体旺盛的代谢力，这样瘦下来了，才不会反弹。科普时间：美国临床营养期刊一项最新的研究对吃肉与体重增长做了一个长期的分析，得出的结论与常规媒体报道的结论完全不同。目前流行的观点是，控制体重必须控制“卡路里”的摄取量，而新的结论却更加强调了肉的重要性，只有控制了肉类的摄取量，才能将体重斩于刀下。"},
          { text: "推荐的肉类是鱼虾一类水产肉->鸡鸭鹅一类禽肉->猪牛羊一类畜肉。"},
          { text: "吐槽3：骚年不识米饭香，为了减肥含泪说：“欧巴，我不饿”!"},
          { text: "“米饭来了，快逃!”很多妹纸为了减肥，视米饭等主食为怪物，但是，妹纸，不吃主食真的瘦不了!  科普时间：大米能提供淀粉质，属于碳水化合物的一种。而碳水化合物可分为糖(包括单糖和双糖)、淀粉质及膳食纤维三大类，其中糖类、糖浆和蜜糖都含丰富的单糖或双糖，而白米饭和根茎类蔬菜含丰富的淀粉质及膳食纤维。根据营养学家研究建议，我们每天膳食当中，碳水化合物应占全日总能量的60%-70%。"},
          { text: "以一个成年女性为例：大约每天应该吃3至6份的五谷类食物。要维持日常生活和新陈代谢，我们要摄取足够的碳水化合物，若为了减肥而戒除所有五谷类食物，改吃肉类，或只吃生果充饥，可能会吸收更多热量，增加发胖的机会。当然如果吃的米饭过多的话，亦会造成热量供应过盛的情况，同样导致发胖。至于吃多少米饭，按照自己的身高、体重和平日的活动量而定就可以了，只要合理，就不用担心身体会发胖。"},
          { text: "那么，怎样吃才能有助减肥?放纵吃?NO!随便吃?NO!想要hold住好身材，你需要有足够的减肥智商!OK，爱美网减肥智商提升班，开课了，记住这5个“七字诀”吧!"},
          { text: "1.早餐不能随便吃：含有蛋白质、少量脂肪以及富含纤维的食物、水果都是减肥早餐的首选。谷类能提供稳定的热量，而蛋白质、脂肪和高纤维食品能给人饱腹感，并且维持血糖正常，用营养密度高的水果做成轻食早餐，开胃之外也能控制体重、缓解便秘。"},
          { text: "2.递减进餐代谢佳：随着餐数的增多，身体代谢效率更高，体脂肪也更能燃烧起来，抑制脂肪囤积。少吃多餐是减肥界推崇的健康饮食方式，能加速身体的新陈代谢，促进脂肪的燃烧。你先要了解下，你每天摄取的总热量应该是多少(测一下：你每天吃多少卡不会胖)，再将热量拆分成几份，分散进餐。最理想的进餐次数是每天5-6次，但考虑到方便性，编辑建议分成3-4次就好。"},
          { text: "3.烹饪方式很重要：同样的食物，选择不同的烹饪方式，会造成热量的巨大差别，比如炸鸡腿热量高达350卡，而煮鸡腿只有180卡左右。一般来说，拌、蒸、煮、焖，其热量会小于煎、炸、烤等方式。另外，调料与配菜也是影响食物热量的重要因素，比如勾芡的方式因为增加了淀粉，就会使热量增加;再如蔬菜沙拉采取生拌的烹饪方式，热量很低，但如果加入太多千岛汁等沙拉酱，则有可能大大增加热量。烹饪方式热量比较：拌<蒸<煮<炒<卤<熘<煎<炸<烤。"},
          { text: "4.细嚼慢咽更易瘦：进食时，大脑大概需要20分钟才能获得“吃饱了”的信号，细嚼慢咽，使食物能更快消化吸收，促使血糖更快升高，更容易兴奋饱食中枢，较早出现饱足感而停止进食。反之，狼吞虎咽，只会让你进食过量。优雅地咀嚼吧，享受美食带来的味觉体验，美美地瘦下去。"},
          { text: "5.甜食可以放心吃：甜食、零食，是女生的最爱，但却是减肥的大敌。不过， Timing is everything!特拉维夫市的研究员发现早餐吃甜食有益于帮助人们瘦身，并且保持体形。在这项研究中，一些参与者在自己的早餐中加入了饼干、蛋糕或者巧克力，32周之后，他们人均减掉了18千克，更令人惊喜的是他们保持住了。研究员的结论是：清晨吃些甜食，那时身体的新陈代谢处于最佳状态，会帮助你抑制接下来一整天对甜食的渴望。而那些节食的人，可能熬不过多久就会背离自己的减肥计划。"},
        ],
        imageSrc: 'http://images.meishij.net/p/20140306/3a6a109b10efafe32c409853f15570cb.jpg',
        contentTitleImage: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2399684581,1168916341&fm=26&gp=0.jpg'
        // types: []
      },
      {
        id: "9",
        title: "全球最美女人索菲亚·罗兰养生秘诀",
        content:[
          { text: "索菲亚·罗兰给我们印象最深刻的是她超级惹火的身材，以及无比强烈的自信。"},
          { text: "索菲亚·罗兰刚出道的时候，很多摄影师都认为她的鼻子太长、臀部太大。如果不整形，将是一个没有前途的演员。但索菲亚·罗兰却不为所动，她对一个要求她做整形手术的导演这样说道：“我要保持我的本色，我不想因为别人的看法而改变自己。"},
          { text: "正是凭借这种无比强烈的自信，索菲亚·罗兰打动了导演，进而打动了全世界的影迷，成为与玛丽莲·梦露齐名的性感明星。"},
          { text: "年过60的她，如今依旧光彩照人，在担任某世界选美盛事评委时，她向观众透露了她的四条养生秘诀。"},
          { text: "第一条，禁食排毒。每隔两天吃一个菠萝，因为菠萝中所含的酶能促进新陈代谢，使身体保持苗条。每隔3个月禁食两天，在这两天内只吃新鲜水果，喝不含糖的果汁。这样可以起到“清洗”消化系统、增强抵抗力的作用。"},
          { text: "第二条，多喝水。每天坚持饮用2升矿泉水。索菲亚·罗兰认为多饮水可保持皮肤弹性，还可以起到“冲洗”肾脏的作用。同时，她每天喝1杯酸奶，同时配吃一匙啤酒酵母。这种高效营养物质对皮肤能起到良好的保护作用，并可使头发保持光泽。"},
          { text: "第三条，10分钟哑铃。索菲亚·罗兰每天练10分钟哑铃，锻炼时打开窗户，使空气保持清新。锻炼后用冷水淋浴，这样可以使肌肉紧绷并促进胸部健美。"},
          { text: "第四条，永远乐观。除此之外，对未来充满梦想，对所有新生事物充满热情，快乐豁达地生活也是索菲亚·罗兰能战胜时间的秘诀。"},
        ], 
        imageSrc: 'http://images.meishij.net/p/20140109/e1cd82757ebf32d6deffff1ecf75b284.jpg',
        contentTitleImage: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=475771685,1459815651&fm=26&gp=0.jpg'
        // types: []
      },
      {
        id: "10",
        title: "补充胶原蛋白吃什么好？胶原蛋白软糖也可以",
        content: [
          { text: "胶原蛋白是一种生物高分子，也是动物结缔组织中的重要成分。不少人想要补充胶原蛋白来护肤，不少人想要补充胶原蛋白来锁住骨质不流失，不少人想要补充胶原蛋白来维持韧带的强韧……胶原蛋白的作用有很多，如果想要补充角蛋白的话，应该吃什么好呢?。"},
          { text: "一、红色蔬菜。红色的蔬菜比如西红柿、甜菜、红椒等等食物当中含有一种叫做番茄红素的物质，被人们熟知的效果是能够抗氧化，能够防晒，其实它还有助于补充胶原蛋白，还能为胶原蛋白附上一层保护膜，有利于减缓胶原蛋白的流失。"},
          { text: "二、豆类食物。生活中常见的豆类食物有豆腐、豆浆、豆皮等，富含大量的营养物质，当中就有能够加速胶原蛋白生成的染料木黄酮，还有助于抗氧化，对能够加速皮肤衰老的金属蛋白酶有抑制的作用，帮助减缓身体、皮肤的衰老。"},
          { text: "三、银耳。银耳性质温和、富含植物胶原蛋白，能够为身体补充大量的胶原蛋白的同时，还有助于润燥、健脾开胃，是很适合女性的胶原蛋白食品。银耳的食用方法很多，可以加入喜欢的配料制作成糖水，也可以作为煲汤的一种材料，都很适合。"},
          { text: "四、胶原蛋白软糖。跟银耳、甜菜等食物不一样，胶原蛋白软糖是一种零食。不仅仅是正常当中能够吃到胶原蛋白，零食中也可以！比如汤臣倍健胶原蛋白软糖就是其中一个好例子。"},
          { text: "跟一般食物当中的大分子胶原蛋白有些不一样，汤臣倍健胶原蛋白软糖中的是一种小分子的胶原蛋白，名叫鱼胶原蛋白肽。相比起大分子，小分子的鱼胶原蛋白肽更容易被身体的肠胃分解吸收，补充更方便。每一颗汤臣倍健胶原蛋白软糖中添加了150毫克的鱼胶原蛋白肽，并用玫瑰夹心进行调味，甜甜的味道加上软糖本身的软糯口感，味道好，人们更容易接受。并且软糖的热量并不高，体积又小，不必担心吃胖的问题。"},
          { text: "汤臣倍健胶原蛋白软糖有营养、味道好，也很方便人们携带进食。每一颗软糖都有自己的独立包装，保存起来干净又卫生。如果有需要带出门时，轻轻地撕开包装就能吃，也不需要担心脏手的问题。是很适合现代女性的一种零食！"},
        ],
        imageSrc: 'http://images.meishij.net/p/20200423/ea04892aba069f08729eaa83f838292b.jpg',
        contentTitleImage: 'http://images.meishij.net/p/20200423/8ff629bffa67cbbd409100981d4a7ca1.jpg'
        // types: []
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收id
    let articleId = options.id
    console.log(articleId)
    this.setData({
      articles: this.data.articles[articleId]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})