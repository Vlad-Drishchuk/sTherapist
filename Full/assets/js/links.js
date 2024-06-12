const soundsData = {
    "Mom": {
        ua: "Мама",
        img: "https://www.dropbox.com/scl/fi/0r2g94f1ohfixry70tc8t/.jpeg?rlkey=vmitwdt4wjv7kqbx5nvor6jgh&st=d458wu6w&raw=1",
        audio: "https://www.dropbox.com/scl/fi/mp0c49xn58fg01f2yuvr6/.m4a?rlkey=w4pe21lngn0vmopulb2t5jbh9&st=gcridq0e&raw=1"
    },
    "Girl": {
        ua: "Дівчинка", 
        img: "https://www.dropbox.com/scl/fi/a69zw8hdeodvso5rd4t2e/.jpeg?rlkey=162sr7h7y2u2ebgaxq8watjd1&st=eun6c4hu&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/qrmgnwbbmuweoxrppexgr/.m4a?rlkey=2lliplgdo2os6z26bdbuma6hq&st=078g0jx3&raw=1" 
    },
    "Counting": { 
        ua: "Рахунок", 
        img: "https://www.dropbox.com/scl/fi/w03xywr8nnp0rzu83k8q6/.jpeg?rlkey=6rmf7d7tmmozu04725yiesarq&st=uqwjoyqo&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/7zg2bhm3ijxgss8zmr178/.m4a?rlkey=np6128n2ovhh37gag5b339jve&st=0jodsju3&raw=1" 
    },
    "Cough": { 
        ua: "Кашель", 
        img: "https://www.dropbox.com/scl/fi/8o1obe6hmbh4o0948t5gh/.jpeg?rlkey=4wzc4cqexz55vr3y7je5i45l2&st=oyur7ici&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/teo46pqj8v23l3wnpywul/.mp3?rlkey=fat5a6n5yn1q88w85zsh7r5pz&st=u1g7810j&raw=1" 
    },
    "Biting_an_apple": { 
        ua: "Кусання яблука", 
        img: "https://www.dropbox.com/scl/fi/aoomx0nr7d4bkjzoxt62w/.jpeg?rlkey=t6p50zw0pe2zzh8sjk0wqkrbm&st=r67kg2qf&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/67q6t8nr6c5iq7r7h4mwv/.mp3?rlkey=98d8nlk4950ahhkwj16xpqyq0&st=u4k0qrpm&raw=1" 
    },
    "Chewing": { 
        ua: "Жування", 
        img: "https://www.dropbox.com/scl/fi/n5bzlb9i3if5xlw9c6qdj/.jpeg?rlkey=otlc3nzfjrh1pxdt6dm324t0b&st=s439uxb9&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/jtmgv1whml0urwnmg6ayb/.mp3?rlkey=tp39gcpqq807o5nzlpbhdmmd6&st=xwhl6910&raw=1" 
    },
    "Drinking": { 
        ua: "Пиття", 
        img: "https://www.dropbox.com/scl/fi/ss301snxc65n62wpnox4o/.jpeg?rlkey=uvnb7bqy24ypyxvxmfbouxok4&st=cceydoau&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/bkzumdul77b7mq05iwecj/.mp3?rlkey=3wrl0ev4wh8zpzvcr71xzrihv&st=awx1y6fz&raw=1" 
    },
    "Crying": { 
        ua: "Плач", 
        img: "https://www.dropbox.com/scl/fi/53fr6wfvqoqkjgtsn15qb/.jpeg?rlkey=5dks5c0w3d9cu9iwbl33i1ch8&st=oyck21hz&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/ovr06pld880e0y0cgj9ra/.mp3?rlkey=o3wgiiam7eu4dmyw9myw81u76&st=2ofeyqmm&raw=1" 
    },
    "Scream": { 
        ua: "Крик", 
        img: "https://www.dropbox.com/scl/fi/97dw0c77mg4mb6qn4aqp1/.jpeg?rlkey=uztx3cbcw1ekl3m54re0s6duc&st=jb0wjut1&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/tmxg3rdetzfy5gxvcpg7n/.mp3?rlkey=1nhsl1njvu0cw37zc5ok153b7&st=emg684sc&raw=1"
    },
    "Yawning": { 
        ua: "Позіхання", 
        img: "https://www.dropbox.com/scl/fi/ifhyl5d16ohw4tdg369kh/.jpg?rlkey=b52z2y9g9m2j66mu9w9cx2geo&st=3r8450em&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/gzd8ke4k16cxnj778e7i9/.mp3?rlkey=dxj3todmr1lakfodvlorpjq9f&st=7bupdfqw&raw=1"
    },
    "Sneezing": { 
        ua: "Пчихання", 
        img: "https://www.dropbox.com/scl/fi/8qhfupy3z62al70ppgufz/.jpeg?rlkey=1oeryc0yvkawh8w9oul9y5qdy&st=g3vabj8u&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/yc0eixm9a2qyzmf476lrn/.mp3?rlkey=kr135po6dnnt8zs17zevwstry&st=1i9l9crk&raw=1" 
    },
    "Snoring": { 
        ua: "Хропіння", 
        img: "https://www.dropbox.com/scl/fi/r60huotrp4ig8ogtt2ctt/.jpeg?rlkey=4g030cwoxz4i2sam0tvo5ffy4&st=tqw3b464&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/crv7hkatb78v96era9x65/.mp3?rlkey=z4kdtzzwyklj0g6ut9cpl8lv0&st=56dgz2ar&raw=1" 
    },
    // "Laughter": { ua: "Сміх", img: "images/laughter.jpg", audio: "sounds/laughter.mp3" },
    "Brushing_teeth": { 
        ua: "Чищення зубів", 
        img: "https://www.dropbox.com/scl/fi/ztb3wscl2vyzcqfjdooq7/.jpg?rlkey=sa2owh3ic7e044g3dv0aslv8c&st=m76x5v75&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/mpk7oix32xv1va2oc8ja8/.mp3?rlkey=zfjwvi1u90dgrskdwb42nzzdc&st=ox07xgwx&raw=1" 
    },
    "Children_outside": { 
        ua: "Діти на вулиці", 
        img: "https://www.dropbox.com/scl/fi/f9lp84zl0t30e0ii4y684/.jpeg?rlkey=qhhq5ofb138o7jx7uiiltb7vs&st=taqqgz34&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/jpd1a5zpt48dxixppv1k1/.mp3?rlkey=z7nlory8rvtbx3yf47p5cpoas&st=f0qi4gji&raw=1" 
    },

    // додати дитячий сміх
    "Kettle_water": {
        ua: "Вода з чайника", 
        img: "https://www.dropbox.com/scl/fi/76f7qv4dzij82dr21parl/.jpeg?rlkey=2z2g9cti8v78or2400dv74p8w&st=52rtgb8o&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/qre70b0ji8hx210r4hpfa/.mp3?rlkey=590t8y22tmfz4ntd0cdiq6mmj&st=8jusu5wc&raw=1" 
    },
    "Spoon_clatter": { 
        ua: "Калатання ложки", 
        img: "https://www.dropbox.com/scl/fi/54dwqre0b0zaui3xk4h4h/.jpeg?rlkey=u83eov2yai8xlnwdtz2vggpwq&st=1epzl27b&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/cltov4p41u6xx71kzp6t8/.mp3?rlkey=4ktog9fy8j2nlh7eoembwacn0&st=fq5kxe6s&raw=1" 
    },
    "Mixer": { 
        ua: "Міксер", 
        img: "https://www.dropbox.com/scl/fi/237xiuoffwciwvc04dhso/.jpeg?rlkey=7w0mocfap99lo6ti7h6xlrjkq&st=nuhykf3o&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/cdpz3f26nzrajw00uxj5l/.mp3?rlkey=41dj6nkh9a76up2b4qd2g9cu6&st=6poajd78&raw=1" 
    },
    "Knife_knock": { 
        ua: "Стук ножа", 
        img: "https://www.dropbox.com/scl/fi/ya83y5hglbu0obn490ldk/.jpeg?rlkey=ndks9fbvq9fxinhh9jjv6s30e&st=8vdpbokl&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/izo2i35v8hiafnw7aqiaf/.mp3?rlkey=sqmn6azcvi4orkfi22x3d61ue&st=13bp8fsq&raw=1" 
    },
    "Tap_water": { 
        ua: "Шум води з крану", 
        img: "https://www.dropbox.com/scl/fi/98xkq5qvgi0dekt18ph76/.jpeg?rlkey=489zvba30ev7o17q6y5si6swz&st=89tgdxqq&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/mdv1u2bzv9yjod022no67/.mp3?rlkey=gcgbfuak6cro561s0gmgdukan&st=le500cub&raw=1"
    },
    "Boiling_water": { 
        ua: "Кипіння води", 
        img: "https://www.dropbox.com/scl/fi/5zot3xycss4254k451mjq/.jpeg?rlkey=zepszysvvtl8fpcq9vj01j0vv&st=02nvw2c8&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/pmvlv95djk4svi8ivzkf6/.mp3?rlkey=hshyjk8sl3cb3p1ppvsg6ldry&st=b9gio55n&raw=1" 
    },
    "Frying_eggs": { ua: "Яєшня", img: "https://www.dropbox.com/scl/fi/ahxaegjd66x8vtuq4l1y9/.jpeg?rlkey=kutevw46kolj990mir6b1744m&st=pcaisp78&raw=1", audio: "https://www.dropbox.com/scl/fi/v74zwszegp66rt0w0jtvx/.mp3?rlkey=sdne82ab92fvj3iu1q4873don&st=roozwyyr&raw=1" },
    "Popcorn": { 
        ua: "Попкорн", 
        img: "https://www.dropbox.com/scl/fi/u3o0mpc3potn15t8vaf2p/.jpeg?rlkey=jcfuyehbrr4c8b1mt5rqbesu8&st=oy9akqgw&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/pw5gmcrhv0et00pguw8c6/.mp3?rlkey=yvwdlx9e95ahl76k8it1y2d8u&st=d48o9bni&raw=1" 
    },
    "Shower": { 
        ua: "Душ", 
        img: "https://www.dropbox.com/scl/fi/s21jbwbvz1qg0wgrrk3zs/.jpeg?rlkey=7bf5mg4froma5rd56buvvwyty&st=ji5ldztf&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/up2r2t2t0sd9vecu2emzu/.mp3?rlkey=bbqvjezm6gfgsxi5hhcekyb88&st=qgacf07r&raw=1" 
    },
    "Vacuum_cleaner": { 
        ua: "Пилосос", 
        img: "https://www.dropbox.com/scl/fi/030xihvbqqo9z3w4oe7bt/.jpg?rlkey=4jqcarsqfe1q9t1eom3xz6cuj&st=cmao54vh&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/zs2npj4irgzyefwtu62tn/.mp3?rlkey=5ya76gt7azh090kfpitvkfw4h&st=5kc3x1q2&raw=1" 
    },
    "Door_creak": { 
        ua: "Скрип дверей", 
        img: "https://www.dropbox.com/scl/fi/haeghhitqjdd2bf05qy5l/.jpeg?rlkey=o4ckdftpr9hv5tsaimc453pbg&st=c4oop72p&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/z9n2mpmg7m5rwontlqkrp/.mp3?rlkey=uu0bhvgpkqweplnfo8h9y0u1j&st=fqj4uptn&raw=1" 
    },
    "Door_knock": { 
        ua: "Стук у двері", 
        img: "https://www.dropbox.com/scl/fi/97ryd3nsgkgmdh80lexv5/.jpeg?rlkey=85on4sp0tax55zefvo6cywzrb&st=e293py1e&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/1l66fur8rt0jkugibq9nk/.mp3?rlkey=q6p8kefhl6dkx711m6s7uci4d&st=j51uevzx&raw=1" 
    },
    "Hair_dryer": { 
        ua: "Фен", 
        img: "https://www.dropbox.com/scl/fi/awfj6dw7ja6hejsqezstb/.mp3?rlkey=vumarqgbwoexw224hsvdf1m9x&st=w16iioyh&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/q16m7al7lgct9qjfbcyos/.mp3?rlkey=2fmlpen0ov68s5m3xnxtt9xnl&st=rmg3r89z&raw=1" 
    },
    "Watch": { 
        ua: "Цокання годинника", 
        img: "https://www.dropbox.com/scl/fi/qm1h4wrnrasidyme822x1/.jpeg?rlkey=11yfwv140lindqkx6w1oedxja&st=smjzqqmq&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/fvk61obz0fcatvavnv2x2/.mp3?rlkey=q6o2v1a1t4sqiatuin0rdnewi&st=lzudvxsi&raw=1" 
    },
    "Rustle_of_paper": { 
        ua: "Шелест паперу", 
        img: "https://www.dropbox.com/scl/fi/w1qg720vjaafst535czvx/.jpg?rlkey=m2u8kvogsu7wizxyymiyinmpj&st=0yhuj35w&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/k4cjkbos19vsfwmwnme7l/.mp3?rlkey=eprpuksaqkrzeflf7sbyk2pno&st=3x4tvfhp&raw=1"
    },
    "Hammer": { 
        ua: "Молоток", 
        img: "https://www.dropbox.com/scl/fi/0p7p44xdwbh2i9mj1npom/.jpeg?rlkey=6gylidpexhl7reg7qp6m2fl6f&st=n18x1tp7&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/81qjtbbpvrzq7j4fwo7yv/.mp3?rlkey=4o59thhmfs1hwis0a7qb5inlz&st=cscn4o7y&raw=1" 
    },
    "Heels_clicking": { 
        ua: "Цокання каблуками", 
        img: "https://www.dropbox.com/scl/fi/6f40s60v2l3nron38ism9/.jpeg?rlkey=1tu8cdhjqi3cqengin9gwl1xs&st=r0cpuizh&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/i533n7sxalb953hpmgp2d/.mp3?rlkey=r3ocvtxl5b38qpmexku0au5ud&st=hmmak3zs&raw=1" 
    },
    "Doorbell": { 
        ua: "Дзвінок у двері", 
        img: "https://www.dropbox.com/scl/fi/03q43ojiln2t94wo8ftkl/.jpeg?rlkey=kihvjxxl1mg1lht0f95u7t9kk&st=weorc3ix&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/4pxua8nd130owu4iakjkb/.mp3?rlkey=0wv2ygnyu7u0li0yrq0pv2gqi&st=k9ddf2r9&raw=1"
    },
    "Car": { 
        ua: "Легковий автомобіль", 
        img: "images/car.jpghttps://www.dropbox.com/scl/fi/00k99tns7968876y4xoto/.jpg?rlkey=2wwrlimv3nm63wdv6ico1wm9j&st=hl6dk0jr&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/ux61etpgfo02ps4ch06vz/.mp3?rlkey=gmnbagpc9ohuzoq2h3c7emvxj&st=r5ayzqtp&raw=1" 
    },
    "Car_beeps": { 
        ua: "Сигнал автомобіля", 
        img: "https://www.dropbox.com/scl/fi/jg2b7q7bei81snrgf2y9g/.jpeg?rlkey=sd354wl6g7qgsx05ioo4w2yzf&st=lvgotpu7&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/gi7y792sn4i8odj8bss15/.mp3?rlkey=h3go2gp39m0vt00wvk085s6ao&st=rbfvs2i5&raw=1"
     },
    "Accident": {
        ua: "Аварія", 
        img: "https://www.dropbox.com/scl/fi/6rt6ptfs3l6n385bpgk5g/.jpg?rlkey=ors6nmj0nw924g1bqdnnto2ax&st=pf9qrobh&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/ijfsc67z0ytffehpj1l2i/.mp3?rlkey=60ow6xn21p12aaccgxgb7b2ch&st=9t03coa2&raw=1" 
    },
    "Bike": { 
        ua: "Велосипед", 
        img: "https://www.dropbox.com/scl/fi/hzjsi5bs3tpc287qyf0v5/.jpeg?rlkey=9xrhmmtf9zxlrnbzia1uhxhfu&st=c68ea4kf&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/j11kynq7pqvilif7yxvqm/.mp3?rlkey=29hvxafe9lb8526evaj9on94u&st=8nbg7jsn&raw=1" },
    "Train": { 
        ua: "Потяг", 
        img: "https://www.dropbox.com/scl/fi/4h4y8xzijollxxf61qyyi/.jpeg?rlkey=7gf5cv4oku4ndmbuvxe5kzri4&st=w9qllo40&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/speshrldzj4zris8v8uiu/.mp3?rlkey=8cjieo0vfb284qmlue1sgpoi8&st=0skvhs6t&raw=1" 
    },
    "Truck": {
        ua: "Вантажівка", 
        img: "https://www.dropbox.com/scl/fi/1qnamenvrt21xp3yiod4j/.jpeg?rlkey=9b568r866cu6j0hkmzdqlha9m&st=05asplfd&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/nwjy1i163w1h1iaxtcwxf/.mp3?rlkey=n4e7uihcyrornj7da5re9t931&st=qu30q43m&raw=1" 
    },
    "Ambulance": { 
        ua: "Швидка", 
        img: "https://www.dropbox.com/scl/fi/0uu2ur1j762wc9cvhn7wa/.jpeg?rlkey=oaddgmnwb4xdj8yjziybwa48d&st=kyoqo8q4&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/ntliki0w6uwy77jjg9t7r/.mp3?rlkey=acqzjs7grehmrlvi5u5ohvrdt&st=l81w2pkn&raw=1"
    },
    "Police": { 
        ua: "Поліція", 
        img: "https://www.dropbox.com/scl/fi/ljd6zqdl7esh5mkzhrckf/.jpeg?rlkey=n12cej8qf9jtz3ucwlwkgiv0b&st=36wn97lx&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/ipkjwke2sg43ar8tvk8f9/.mp3?rlkey=py4ablilq16s3rvn197xyxckk&st=fl6cto87&raw=1" 
    },
    "Fire-Department": { 
        ua: "Пожежна", 
        img: "https://www.dropbox.com/scl/fi/0aqzfzzklofhabr0uhfk4/.jpeg?rlkey=psqso0qntojz9qnvkzl90423v&st=079mrhdp&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/d6jal6585fcf9vkcqwuqr/.mp3?rlkey=0u23epi7zhhb71n7bp2i2rhg1&st=o5srp7cy&raw=1" 
    },
    "Tractor": { 
        ua: "Трактор", 
        img: "https://www.dropbox.com/scl/fi/1qnfwip3n72hqm9tgogt0/.jpeg?rlkey=rp0smj9b6k160iql3jty9xlq6&st=2fb1t2uq&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/da6a0xqg31as89o8z2nyw/.mp3?rlkey=snjyy8bc8gpsdc5cg64npjtek&st=64a2i8qt&raw=1" 
    },
    "Wind": { 
        ua: "Вітер", 
        img: "https://www.dropbox.com/scl/fi/zoxz1yyez36m3bsovucso/.jpeg?rlkey=om6ci3b2sb1t82lezt6dwdo4p&st=eva2z4yo&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/3vngeuaq28cfm1nqs54x4/.mp3?rlkey=hn0628420o552j7e04wm5ph3h&st=h3u01myn&raw=1" 
    },
    "Blizzard": { 
        ua: "Хуртовина", 
        img: "https://www.dropbox.com/scl/fi/3asixndsc68plr7natvdk/.jpeg?rlkey=ds6shi703e10mjab3uahcvjo5&st=5c35r860&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/wppycjcv2l1cf9iyejtoj/.mp3?rlkey=coxskrun4nivhbsiyw0ywmx9w&st=2g2d5v4d&raw=1" 
    },
    "Thunder": { 
        ua: "Грім", 
        img: "https://www.dropbox.com/scl/fi/ufzxna74w17qbmj5lds5n/.jpg?rlkey=iz454506edkjch8jkceouhl8h&st=ib9ea5fo&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/6771geodafxgh72aoeuy3/.mp3?rlkey=x6mxgr4h3aghico1ikuer9um6&st=c32qyg2u&raw=1" 
    },
    "Rain": { 
        ua: "Дощ", 
        img: "https://www.dropbox.com/scl/fi/xdbfmnf8d1kki1yqqgq01/.jpeg?rlkey=gejgha9om8mfcg6mbmdn2oxme&st=t6pl1871&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/id8ili61ob66hl1b56otl/.mp3?rlkey=eel0ebongk72xkya0i6o8qj4f&st=uczc992o&raw=1" 
    },
    "Downpour": { 
        ua: "Злива", 
        img: "https://www.dropbox.com/scl/fi/ufwjtnbf3o50yh3hm7w8a/.jpeg?rlkey=dsc5xruaqtfw2c3qyqq8rg1kk&st=ychcd16y&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/5n960wpc93aje1owm7l43/.mp3?rlkey=y813cdnaqqo1gciyycp0i7qxo&st=8ljk64mu&raw=1" 
    },
    "Leaves": { 
        ua: "Шарудіння листям", 
        img: "https://www.dropbox.com/scl/fi/y887ljti2891xbo1xs6qg/.jpeg?rlkey=9ub9600wxvhgu1zpl201g9yot&st=sytlxkyj&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/jl13l53vqx2jum675qahy/.mp3?rlkey=kvlysizm6h1y8f6z7zfmiicju&st=c2s7f3du&raw=1"
    },
    "Strong_wind": { 
        ua: "Сильний вітер", 
        img: "https://www.dropbox.com/scl/fi/gnqgo5g0ywgldmh6w0ccy/.jpeg?rlkey=fh602qggyjxzry2v294wz6y0q&st=4hgss42w&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/089qkc2foc5c3clxh31nn/.mp3?rlkey=u54ck6eh93zcs3w3p3vjxw5ni&st=ure67dd5&raw=1"
    },
    "Pigeons": { 
        ua: "Гурчання голубів", 
        img: "https://www.dropbox.com/scl/fi/tp8e0rjxp6sgci58httn0/.jpg?rlkey=9thm7qybfgmweuw1znszjc2i8&st=a8uruexy&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/zbddzzz4ged98j8xx31di/.mp3?rlkey=08roz6b5971n4j8z3yrg3oct3&st=so4yc8hz&raw=1" 
    },
    "Birds": { 
        ua: "Пташки цвірінькають", 
        img: "https://www.dropbox.com/scl/fi/m6596qyylsttgyekuer34/.jpg?rlkey=iswgnogm9rwx49rb816ps2i67&st=gmnvz20u&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/14x074v0fz3txzrbl7aiv/.mp3?rlkey=qa2p6pzh1n41k7yr5xplrievf&st=r8hrkhfe&raw=1"
    },
    "Sheep": {
        ua: "Вівця", 
        img: "https://www.dropbox.com/scl/fi/z4t4uf8yc49j7qbngjv4t/.jpeg?rlkey=qritzj6c6wyf0evegos8zuxwz&st=c8skqxy2&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/0rlx1t7b28feik4nzlxc2/.mp3?rlkey=uv8kwk1wmnwgpiqqdxqs03t3s&st=kevb4z3p&raw=1" 
    },
    "Goose": {
        ua: "Гуска", 
        img: "https://www.dropbox.com/scl/fi/ie5p6jg0dja17e7styx3y/.jpg?rlkey=upzhnl4y5h3wh9689rtkmj6g2&st=x8sfvfr9&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/yrvyetijutqrwv57gye2u/.mp3?rlkey=zp8bov9wmu2oztt2hkwvg8egk&st=n4wex8yh&raw=1" 
    },
    "Turkey": { 
        ua: "Індик", 
        img: "https://www.dropbox.com/scl/fi/5ltj3yzfz4nwtbzshww13/.jpeg?rlkey=3i3uyb7fy1nqx4q2cp3fbnfhp&st=u2hbt4s8&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/wz8f0oxn1ylheiiyov1ga/.mp3?rlkey=r9kye79p82ncu30bufg2ryiu4&st=193yqyss&raw=1" 
    },
    "Duck": { 
        ua: "Качка", 
        img: "https://www.dropbox.com/scl/fi/b3lroumiddnex4scom0kv/.jpeg?rlkey=cc7n5g2d6g3snm1b3z714k019&st=qele9pty&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/l5pcvb217cofl275nnsyo/.mp3?rlkey=4flga0fdw4w75tvjjm20b78jm&st=jth2ffls&raw=1" 
    },
    "Horse": { 
        ua: "Кінь", 
        img: "https://www.dropbox.com/scl/fi/ps9ipy9c9rikvrdv6gm94/.jpg?rlkey=za6rni9guslusl4rmxvu3bigk&st=d4xhxu9w&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/e8x4tb0c97oescizjacjp/.mp3?rlkey=hanlkhxumoui5n3iup7uva6a5&st=k767pdrp&raw=1" 
    },
    "Cat": { 
        ua: "Кіт", 
        img: "https://www.dropbox.com/scl/fi/1cmuwk323nh9cfl4xk66o/.jpeg?rlkey=sqcb1yz447hdtv60wxq8321fx&st=urcdul4r&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/hzmlq61i99ylzu5o1nhp4/.mp3?rlkey=zki8ybye5g1v0pw9hgt81hgiu&st=pab94bpa&raw=1" 
    },
    "Goat": {
        ua: "Коза", 
        img: "https://www.dropbox.com/scl/fi/obtexjw6qqnk2gu4hstxx/.jpeg?rlkey=2xp26vr10ygo2ofjqav1tzeys&st=j20nzimz&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/bm59wrka5q8dsevd8wqsg/.mp3?rlkey=c8ffmnyipp4km28ocv7r33f3p&st=vlqnmcc6&raw=1" 
    },
    "Cow": { 
        ua: "Корова", 
        img: "https://www.dropbox.com/scl/fi/9jrxgrjpzstdo041nehdm/.jpeg?rlkey=n0eovmd7rzv2elo1pwsh9vcd6&st=61ngonys&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/eg8hthrhlld8m9fyd4vad/.mp3?rlkey=lrs8og08jjj6zngmobfw5lfvt&st=a7y98lox&raw=1" 
    },
    "Donkey": { 
        ua: "Осел", 
        img: "https://www.dropbox.com/scl/fi/0yuchzualuegcxieumoxq/.jpeg?rlkey=yjb4c12y24e13av3818osbp76&st=kcd7w18a&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/c3o59rqndkdg0jvviaao4/.mp3?rlkey=j17ocljqjs6mz0hivtgtomd1d&st=sw5ok6ee&raw=1" 
    },
    "Chicken": { 
        ua: "Курка", 
        img: "https://www.dropbox.com/scl/fi/sngkvgbqdrtix2ygjirum/.jpg?rlkey=2flk7a5ylmzdn334fcs3l45dp&st=grc225n9&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/nfqy4i5q6yfdfpukqzluj/.mp3?rlkey=0jwv7wjdxq6dyek17dmvaels8&st=rnlnis39&raw=1" 
    },
    "Chickens": { 
        ua: "Курчата", 
        img: "https://www.dropbox.com/scl/fi/q3wnhmv8616yw6rdcmomt/.jpeg?rlkey=pm2nl3iz3fff3kvwtwro4782h&st=l40bbx1b&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/7jn85fo57q2rrwgaj66ls/.mp3?rlkey=nu0bq13ekcjzthwlhze8tn8pq&st=73axl95l&raw=1" 
    },
    "Cock": { 
        ua: "Півень", 
        img: "https://www.dropbox.com/scl/fi/ealpirwz0cl2ffinq2qrh/.jpeg?rlkey=j9ifasurtec2suzucwoxd13v4&st=02pe1sjc&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/k9ocutcj22pzbxqonufoh/.mp3?rlkey=5i282scg3kzip1wglku3d5pvg&st=4qubste0&raw=1" 
    },
    "Pig": { 
        ua: "Свиня", 
        img: "https://www.dropbox.com/scl/fi/vof2p48885cusz3417y7u/.jpeg?rlkey=qtryizel79l9sapxr3daivrcn&st=7r9f6706&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/xmc6qjui0tzyzvvwc1od8/.mp3?rlkey=kewd4v1cw8skulspof3pg45px&st=4atic3ul&raw=1"
    },
    "Dog": { 
        ua: "Собака", 
        img: "https://www.dropbox.com/scl/fi/9ps5svbq7qea5zfacgjyo/.jpg?rlkey=wkntejl42dvez3ixpeck7seky&st=ljjlt94j&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/ns3c4h6ho94wnkb9hf7cf/.mp3?rlkey=dtlc20awa51f3npm430i9m2oh&st=q6e5th3w&raw=1" 
    },
    "Bear": { 
        ua: "Ведмідь", 
        img: "https://www.dropbox.com/scl/fi/04su0k6qxv18tlcuekgyh/.jpg?rlkey=ypuyiqwujca9gxb04xbdtmlbm&st=uhenhmoo&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/giyity9y27nty84byz4v0/.mp3?rlkey=lj40cuks97e9iorcs2t6w9q93&st=egpa9zfj&raw=1" 
    },
    "Wolf": { 
        ua: "Вовк", 
        img: "https://www.dropbox.com/scl/fi/isqxto7cys5hb5ve6zcdj/.jpg?rlkey=8hblmwdwlwthwcz5tmb4z4bl7&st=hf286n8u&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/7rdkjbagv8vor54rydrbd/.mp3?rlkey=x735e30ss5oi1e2d5bw4nxx5w&st=ob9idohy&raw=1" 
    },
    "Mouse": { 
        ua: "Миша", 
        img: "https://www.dropbox.com/scl/fi/cwpw1mpsfv5lqxe9mh09b/.jpg?rlkey=gfc8pgjn4eaim8uk4g4riqyrm&st=s7wpqo7y&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/77oaitzxr10stqi4uvqq0/.mp3?rlkey=qxhxaeyqwskvlfeo1t7j40xmn&st=jc0qcfa5&raw=1" 
    },
    "Frog": { 
        ua: "Жаба", 
        img: "https://www.dropbox.com/scl/fi/xht06cggumz2shcrj4pqw/.jpg?rlkey=a89ki94jtxw3h64brx2jntj0g&st=utx68f4z&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/6bf23a6lro8bfro2fbnqp/.mp3?rlkey=ptqbaihl61dx6jtmydjy0okhy&st=ld3zckr0&raw=1" 
    },
    "Owl": { 
        ua: "Сова", 
        img: "https://www.dropbox.com/scl/fi/ln7qa5f4jeskliaydtp8d/.jpg?rlkey=dt3dy4m1j14a18yrfnht1k909&st=y15fcq4s&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/ps2o8p9uxzfli840hi2jk/.mp3?rlkey=7nmnfrsoqigasm6ii54ysoqh4&st=ixtuhuog&raw=1" 
    },
    "Snake": { 
        ua: "Змія", 
        img: "https://www.dropbox.com/scl/fi/96vabqb0fc4nimc6ffqbn/.jpg?rlkey=tj1dvu2rtj8h6wj5a0kngo9kz&st=xaawx8vm&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/ekpd29zpvvd7dkitdlr8r/.mp3?rlkey=lku2xo08lz343bh42vyt09679&st=r96jphny&raw=1" },
    "Woodpecker": { 
        ua: "Дятел", 
        img: "https://www.dropbox.com/scl/fi/kvla974n98k1s4ya91ywf/.jpg?rlkey=lvl3aj0xlttlsl2qazeapkvz9&st=8jv0fj3c&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/05udldnx5994t3ltoe6gh/.mp3?rlkey=fcg2jgbqo69jdbww70ud18g5u&st=v1w0w588&raw=1" 
    },
    "Monkey": { 
        ua: "Мавпа", 
        img: "https://www.dropbox.com/scl/fi/440by1mo5nf237jzwjrds/.jpeg?rlkey=u3i2wtu5vk3ewws2ndhklla5m&st=icq5ko8j&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/o6lwesvq4sbt9a6xq3c1h/.mp3?rlkey=mqlfb8q256ffkh20ddhct1c8q&st=yl2wzda0&raw=1" 
    },
    "Elephant": { 
        ua: "Слон", 
        img: "https://www.dropbox.com/scl/fi/an9crcab6f99h3npkrfz7/.jpeg?rlkey=n6qwtv0piuwp7yl2zqo9fz7pl&st=fpbbkphn&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/5uvapshyoqmkhenr9ruck/.mp3?rlkey=96mojogt5mlcn13z2wn5f10je&st=y52p44pj&raw=1" 
    },
    "Whale": { 
        ua: "Кит", 
        img: "https://www.dropbox.com/scl/fi/kfn0jdxn0fz67oel8o0ye/.jpeg?rlkey=mjowll828zrugs0yvem7fpsnf&st=drm6159k&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/mua724zcn67u3hwbdr6ni/.mp3?rlkey=hwlvp8fzk5inw56qzx11gkhvu&st=n7y0zgvg&raw=1" 
    },
    "Dolphin": { 
        ua: "Дельфін", 
        img: "https://www.dropbox.com/scl/fi/69xst8p4osaeo85pc8vom/.jpeg?rlkey=2lihwebp85bkmy3tjdmjluw5l&st=m709lqz2&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/40fu7ro7ov2egrjn6ylv4/.mp3?rlkey=av1tfub0fmo4xa3yutrhqrjc9&st=8vumsxn4&raw=1" 
    },
    "Seal": { 
        ua: "Тюлень", 
        img: "https://www.dropbox.com/scl/fi/7t5sx7h2ow8aipt2t8l9i/.jpeg?rlkey=394ibs3517vezb5cxkr6ml86x&st=2r1kmmzz&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/awfj6dw7ja6hejsqezstb/.mp3?rlkey=vumarqgbwoexw224hsvdf1m9x&st=w16iioyh&raw=1" 
    },
    "Lion": { 
        ua: "Лев", 
        img: "https://www.dropbox.com/scl/fi/7g91i4l2hjt089fwvcgzk/.jpeg?rlkey=iexfjbufgyksza7dpo90gqaeo&st=k6101w77&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/rh8jb8e41ir3a5hlhjz9n/.mp3?rlkey=jqokcil9oa3jnnowsqru50efv&st=rjwqy3ya&raw=1" 
    },
    "Stork": { 
        ua: "Лелека", 
        img: "https://www.dropbox.com/scl/fi/fq1g7ucbq4u0jmnrebmt3/.jpeg?rlkey=mv7xxu03kfkowg9e3peb9g15y&st=4j6qz45k&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/93ebx9751bfca9h5z1wyf/.mp3?rlkey=tl1zhf47mg79aqqwgcto7nubz&st=11da97i7&raw=1" 
    },
    "Parrot": { 
        ua: "Папуга", 
        img: "https://www.dropbox.com/scl/fi/ryvq63542dyzr737qj026/.jpeg?rlkey=xoe592r2vppxga5si34m9tczn&st=k5lt9nnz&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/lm3c5xigtihliovav7wug/.mp3?rlkey=kge0e9doklblqaxq8dpdzjjxx&st=cd8cb0by&raw=1" 
    },
    "Guinea_pig": { 
        ua: "Морська свинка", 
        img: "https://www.dropbox.com/scl/fi/kbdh3tpk6fo46kfjmbjhy/.jpeg?rlkey=jtvrgs9mo7imipcuvdyq91byu&st=8td0mq36&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/snelnkf48tjn0qlloip9f/.mp3?rlkey=yckq7u3ndgvr9v1hknpcct9yc&st=arqaxeje&raw=1" 
    },
    "Drum": {
        ua: "Барабан",
        img: "https://www.dropbox.com/scl/fi/lgmly5al6y5vn3c29xpmb/.jpg?rlkey=bxmwffpfmtijrygj5iyc0utgy&st=zevgbhf0&raw=1",
        audio: "https://www.dropbox.com/scl/fi/fvk0ai8sa096flvi0vxcy/.mp3?rlkey=9i1owwsjnwcvozaoutiqin8t3&st=pyfsu5o2&raw=1" 
    },
    "Tambourine": {
        ua: "Бубен",
        img: "https://www.dropbox.com/scl/fi/gwd3t6r55snbynmemvznc/.png?rlkey=t23fpuvv1ltb79hbh6lzlrdz0&st=4yf3691k&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/92rcvsblzevfak7rrr5x1/.mp3?rlkey=yhag10rxwx07rpq1l6pc3n7k6&st=j3vhtvb5&raw=1"
    },
    "Piano": { 
        ua: "Фортепіано", 
        img: "https://www.dropbox.com/scl/fi/u8o3h24xpkcy5pj6ex9n3/.jpeg?rlkey=7yvvu31lqxhb6fy4ul1wp3wvv&st=a5tso00w&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/qxt69lbt2d3ea8aawfb4x/.mp3?rlkey=pqq2vbii4yrp9aq1bs8w2bnv2&st=mraslmp3&raw=1" 
    },
    "Trumpet": { 
        ua: "Труба", 
        img: "https://www.dropbox.com/scl/fi/vw27ytfb0k12dg551y9kf/.jpeg?rlkey=v2cwkyr08o0ta8s8k2brqo0cz&st=bgxnsymf&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/o6z2ysnkpjizvbcup9qpn/.mp3?rlkey=c3psy4o15adnkd6ly9tn0uzu7&st=3dq333gd&raw=1" 
    },
    "Guitar": { 
        ua: "Гітара", 
        img: "https://www.dropbox.com/scl/fi/v8og7lnojjzo7q6t65f0p/.jpeg?rlkey=18hqzvesk12yi2cuclt428uwv&st=6usky2fn&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/40437z3uavra853x13jfo/.mp3?rlkey=2mvjv4g8bld5hdu7wuc1tel47&st=83pdoutp&raw=1" },
    "Violin": { 
        ua: "Скрипка", 
        img: "https://www.dropbox.com/scl/fi/5fpxf2u13l84m50lctzqt/.jpeg?rlkey=ekhfqahnee5pwqriioqjw158d&st=9zmej076&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/qfuj02kcaqfaybejt5880/.mp3?rlkey=lpc2xp3ihc30uwzh0id09sbrh&st=hh358mmg&raw=1" 
    },
    "Flute": { 
        ua: "Сопілка", 
        img: "https://www.dropbox.com/scl/fi/m4krsl5z0bt4wczvtu8yc/.jpeg?rlkey=cm3i7d63867m0vghfy9s412lh&st=qvlb3hxq&raw=1", 
        audio: "https://www.dropbox.com/scl/fi/f6l3l91w05f6k291djbx3/.mp3?rlkey=8xngmml8z9e21v46oisqy0u6y&st=xnyd9dto&raw=1" 
    },
    // Add more sounds as needed

    // "Stream": {
    //     ua: "Струмок",
    //     img: "images/stream.jpg",
    //     audio: "sounds/stream.mp3"
    // },
    // "Sea": {
    //     ua: "Море",
    //     img: "images/sea.jpg",
    //     audio: "sounds/sea.mp3"
    // },
    // "Fire": {
    //     ua: "Вогонь",
    //     img: "images/fire.jpg",
    //     audio: "sounds/fire.mp3"
    // },
};
