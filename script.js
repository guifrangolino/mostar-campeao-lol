const champInfo = document.querySelector('#champInfo')
const champImg = document.querySelector('#champImg')
const champNome = document.querySelector('#champNome')
const champBio = document.querySelector('#champBio')
const logo = document.querySelector('#logo')
const linkPag = document.querySelector('#linkPag')
const champNaoEncontrado = document.querySelector('#champNaoEncontrado')


function mostrarChamp() {
    const nomeDado = document.querySelector('#nomeDado').value.toUpperCase()

    if (nomeDado == 'AATROX') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8347d1c6baa57be25/RiotX_ChampionList_aatrox.jpg?quality=90&width=250')
        champNome.innerHTML = 'Aatrox , a Espada Darkin'
        champBio.innerHTML = 'Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de encarceramento, Aatrox foi o primeiro a encontrar a liberdade novamente, e ele saiu corrompendo e transformando quem fosse tolo o suficiente de tentar tocar na arma mágica que continha sua essência. Agora, com um corpo roubado, ele vaga por Runeterra transfigurado, em uma versão bizarra da sua forma anterior, buscando uma vingança apocalíptica.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/aatrox/')
        ativacaoBotao()
    } else if (nomeDado == 'AHRI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1259276b6d1efa78/5db05fa86e8b0c6d038c5ca2/RiotX_ChampionList_ahri.jpg?quality=90&width=250')
        champNome.innerHTML = 'Ahri, a Raposa de Nove Caudas'
        champBio.innerHTML = 'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia. Ela gosta de brincar com suas presas manipulando suas emoções antes de devorar suas essências vitais. Apesar de sua natureza predatória, Ahri conserva um senso de empatia ao receber flashes de memória das almas que ela consome.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/ahri/')
        ativacaoBotao()
    } else if (nomeDado == 'AKALI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt80ff58fe809777ff/5db05fa8adc8656c7d24e7d6/RiotX_ChampionList_akali.jpg?quality=90&width=250')
        champNome.innerHTML = 'Akali, a Assassina Renegada'
        champBio.innerHTML = 'Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora ataca sozinha, pronta para ser a arma mortal que seu povo precisa. Embora ela mantenha tudo o que aprendeu com seu mestre Shen, ela se comprometeu a defender Ionia de seus inimigos, um assassinato de cada vez. Akali pode atacar em silêncio, mas sua mensagem será ouvida em voz alta e clara: “Temam a assassina sem mestre”.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/akali/')
        ativacaoBotao()
    } else if (nomeDado == 'AKSHAN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdd84b33ec501c137/60f9ede33f40e5481e85c0c6/RiotX_ChampionList_akshan_v2.jpg?quality=90&width=250')
        champNome.innerHTML = 'Akshan, o Sentinela Rebolde'
        champBio.innerHTML = 'Akshan ri da cara do perigo, lutando contra o mal com carisma, determinação e desejo de vingança, mas, estranhamente, sem vestir uma camisa sequer. É extremamente habilidoso na arte do combate furtivo, capaz de sumir da vista dos inimigos e reaparecer quando menos se espera. Com um firme senso de justiça e uma arma lendária que pode reverter a morte, ele corrige os delitos dos canalhas de Runeterra e vive de acordo com um código de conduta particular: "Não seja babaca".'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/akshan/')
        ativacaoBotao()
    } else if (nomeDado == 'ALISTAR') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b366925d2fd8fdb/5db05fa856458c6b3fc1750b/RiotX_ChampionList_alistar.jpg?quality=90&width=250')
        champNome.innerHTML = 'Alistar, o Minotauro'
        champBio.innerHTML = 'Um poderoso guerreiro com uma temível reputação, Alistar busca vingança por seu clã, morto pelas mãos do império de Noxus. Apesar de ter sido escravizado e forçado a uma vida de gladiador, sua vontade indestrutível o impediu de se tornar uma fera de verdade. Agora, liberto das correntes dos seus antigos mestres, ele luta pelos oprimidos e desfavorecidos, sua fúria uma arma tão poderosa quanto seus chifres, cascos e punhos.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/alistar/')
        ativacaoBotao()
    } else if (nomeDado == 'AMUMU') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt40dfbe48a61c439f/5db05fa80b39e86c2f83dbf9/RiotX_ChampionList_amumu.jpg?quality=90&width=250')
        champNome.innerHTML = 'Amumu, a Múmia Triste'
        champBio.innerHTML = 'Reza a lenda que Amumu é uma alma solitária e melancólica da antiga Shurima que vaga sem rumo pelo mundo em busca de um amigo. Amaldiçoado por um feitiço ancestral para permanecer só pela eternidade, seu toque traz a morte e sua afeição, a ruína. Aqueles que afirmam já tê-lo visto o descrevem como um morto-vivo franzino e coberto por faixas asquerosas. Amumu já inspirou tantos mitos, folclore e lendas contadas por muitas gerações, que já é impossível separar a verdade da ficção.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/amumu/')
        ativacaoBotao()
    } else if (nomeDado == 'ANIVIA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3d24a1482453088a/5db05fa8df78486c826dcce8/RiotX_ChampionList_anivia.jpg?quality=90&width=250')
        champNome.innerHTML = 'Anivia, a Criofênix'
        champBio.innerHTML = 'Anivia é um espírito alado e benevolente que suporta infinitos ciclos de vida, morte e renascimento para proteger Freljord. Uma semideusa nascida de ventos impiedosos e frios brutais, ela carrega esses poderes elementais para perseguir qualquer um que ousar perturbar sua terra natal. Anivia guia e protege as tribos do norte hostil, que a reverenciam como um símbolo de esperança e como uma portadora de grandes mudanças. Ela luta com todas as fibras do seu ser, sabendo que por meio do sacrifício, sua memória irá perdurar e ela renascerá em um novo amanhã.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/anivia/')
        ativacaoBotao()
    } else if (nomeDado == 'ANNIE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt28c708665427aef6/5db05fa89481396d6bdd01a6/RiotX_ChampionList_annie.jpg?quality=90&width=250')
        champNome.innerHTML = 'Annie, a Criança Sombria'
        champBio.innerHTML = 'Perigosa, mas adoravelmente precoce, Annie é uma pequena maga com imenso poder piromaníaco. Mesmo isolada nas sombras das montanhas ao norte de Noxus, ela causa estranhamento com sua magia. Sua afinidade natural com o fogo já era evidente desde a primeira infância, quando ela tinha explosões emocionais imprevisíveis. Apesar disso, ela aprendeu a controlar esses “truques divertidos”. Seu truque favorito inclui invocar seu amado ursinho de pelúcia, Tibbers, como protetor incendiário. Perdida na eterna inocência da infância, Annie vaga pelas florestas sombrias em busca de alguém para brincar.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/annie/')
        ativacaoBotao()
    } else if (nomeDado == 'APHELIOS') {
        champImg.setAttribute('src', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg')
        champNome.innerHTML = 'Aphelios, a Arma dos Devotos'
        champBio.innerHTML = 'Emergindo da sombra do luar com suas armas em mãos, Aphelios abate os inimigos de sua fé em absoluto silêncio, comunicando-se apenas pela destreza de sua mira e pelo disparo de cada arma. Embora viva sob o efeito de um veneno que o emudeceu, ele é guiado por sua irmã Alune, que habita um santuário distante de onde invoca um arsenal de armas de pedra da lua para ajudá-lo. Enquanto a lua brilhar no céu, Aphelios nunca estará sozinho.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/aphelios/')
        ativacaoBotao()
    } else if (nomeDado == 'ASHE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt943aae038e2dee98/5db05fa8e9effa6ba5295f91/RiotX_ChampionList_ashe.jpg?quality=90&width=250')
        champNome.innerHTML = 'Ashe, a Arqueira do Gelo'
        champBio.innerHTML = 'A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista, mesmo que desconfortável com seu papel de liderança, ela canaliza as magias ancestrais de sua linhagem para empunhar um arco de Gelo Verdadeiro. Com a crença de seu povo de que Ashe seria a heroína mítica, Avarosa, reencarnada, ela espera unificar Freljord mais uma vez, retomando suas antigas terras tribais.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/ashe/')
        ativacaoBotao()
    } else if (nomeDado == 'AURELION SOL' || nomeDado == 'AURELION') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5dd3569fc67d6664/5db05fa8bd24496c390ae4d8/RiotX_ChampionList_aurelionsol.jpg?quality=90&width=250')
        champNome.innerHTML = 'Aurelion Sol, o Forjador de Estrelas'
        champBio.innerHTML = 'Aurelion Sol costumava agraciar a vasta imensidão vazia dos cosmos com maravilhas celestiais concebidas por ele mesmo. Agora, ele é forçado a usar seu incrível poder a mando de um império espacial remoto que o enganou e o mantém sob servidão. Desejando voltar a forjar estrelas, Aurelion Sol arrastará as próprias estrelas dos céus se for preciso para recuperar sua liberdade.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/aurelion-sol/')
        ativacaoBotao()
    } else if (nomeDado == 'AZIR') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0e3f847946232167/5db05fa889fb926b491ed7ff/RiotX_ChampionList_azir.jpg?quality=90&width=250')
        champNome.innerHTML = 'Azir, o Imperador das Areias'
        champBio.innerHTML = 'Azir foi um imperador mortal de Shurima em uma era muito antiga e um homem orgulhoso que esteve a um passo da imortalidade. Sua insolência fez com que fosse traído e assassinado no momento de seu maior triunfo, mas agora, milênios depois, ele renasceu como um Ascendente de poder imenso. Com sua cidade antes soterrada agora erguida, Azir busca devolver Shurima à sua antiga glória.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/azir/')
        ativacaoBotao()
    } else if (nomeDado == 'BARDO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbbe3ce0c0ae1305b/5db05fb23a326d6df6c0e7b3/RiotX_ChampionList_bard.jpg?quality=90&width=250')
        champNome.innerHTML = 'Bardo, o Protetor Andarilho'
        champBio.innerHTML = 'Viajante de galáxias distantes, Bardo é um agente do acaso que luta para manter um equilíbrio em que a vida possa suportar a indiferença do caos. Muitos habitantes de Runeterra entoam canções que louvam sua extraordinária índole, mas todos concordam que o andarilho cósmico é chegado a artefatos de grande poder mágico. Cercado por um jubiloso coral de prestativos mipes espirituais, é impossível enxergar suas ações como malevolentes, pois Bardo sempre serve ao bem maior... de sua própria maneira estranha.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/bard/')
        ativacaoBotao()
    } else if (nomeDado == 'BLITZCRANK' || nomeDado == 'BLITZ') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd7ef7e56ce1fe17b/5db05fb26af83b6d7032c8f8/RiotX_ChampionList_blitzcrank.jpg?quality=90&width=250')
        champNome.innerHTML = 'Blitzcrank, o Grande Golem a Vapor'
        champBio.innerHTML = 'Blitzcrank é um autômato enorme e praticamente indestrutível de Zaun, construído originalmente para lidar com lixo tóxico. No entanto, ele achou seu propósito principal muito restritivo e modificou sua própria forma para ajudar as pessoas menos favorecidas do Sumidouro. Blitzcrank usa sua força e robustez para proteger os outros sem pedir nada em troca, estendendo seu punho de metal ou surto de energia para derrotar qualquer encrenqueiro.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/blitzcrank/')
        ativacaoBotao()
    } else if (nomeDado == 'BRAND') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc8ca2e9bba653dda/5db05fb2dc674266df3d5d30/RiotX_ChampionList_brand.jpg?quality=90&width=250')
        champNome.innerHTML = 'Brand, a Vingança Flamejante'
        champBio.innerHTML = 'A criatura conhecida como Brand já se chamou Kegan Rodhe, um membro da gélida Freljord, e é hoje uma lição do que a tentação por poderes maiores pode fazer. Enquanto buscava uma das lendárias Runas Globais, Kegan traiu seus companheiros e a pegou para si e, em um instante, o homem já não existia mais. Com sua alma consumida pelo fogo e seu corpo um invólucro de uma chama viva, Brand agora vaga por Valoran em busca de outras runas, jurando vingança por erros que ele nunca poderia ter sofrido em uma dúzia de vidas mortais.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/brand/')
        ativacaoBotao()
    } else if (nomeDado == 'BRAUM') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd140e30fa86d6ddd/5db05fb2242f426df132f95d/RiotX_ChampionList_braum.jpg?quality=90&width=250')
        champNome.innerHTML = 'Braum, o Coração de Freljord'
        champBio.innerHTML = 'Abençoado com bíceps gigantescos e um coração maior ainda, Braum é um amado herói de Freljord. Cada salão de hidromel ao norte de Frostheld brinda sua força lendária que teria derrubado uma floresta de carvalhos em uma única noite e demolido uma montanha inteira com um soco. Carregando uma porta de cofre encantada como seu escudo, Braum vaga pelo norte congelado com seu sorriso abigodado tão grande quanto seus músculos, um verdadeiro amigo para os necessitados.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/braum/')
        ativacaoBotao()
    } else if (nomeDado == 'CAITLYN' || nomeDado == 'CAIT') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt014f4b6fc9bacd10/61b1eb901d158d4007de9685/RiotX_ChampionList_caitlyn_v2.jpg?quality=90&width=250')
        champNome.innerHTML = 'Caitlyn, a Xerife de Piltover'
        champBio.innerHTML = 'Conhecida como sua melhor pacificadora, Caitlyn também é a melhor escolha de Piltover para livrar a cidade de seus elementos criminosos elusivos. É comum que ela faça dupla com Vi, agindo como um contraponto de calmaria para a natureza impetuosa de sua parceira. Mesmo carregando um rifle hextec único, a arma mais poderosa de Caitlyn é seu intelecto superior, que permite que ela prepare elaboradas armadilhas para qualquer fora da lei tolo o suficiente para operar na Cidade do Progresso.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/caitlyn/')
        ativacaoBotao()
    } else if (nomeDado == 'CAMILLE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt413fcd7681fe0773/5db05fb089fb926b491ed805/RiotX_ChampionList_camille.jpg?quality=90&width=250')
        champNome.innerHTML = 'Camille, a Sombra de Aço'
        champBio.innerHTML = 'Munida para agir além dos limites da lei, Camille é a chefe de inteligência do Clã Ferros e uma elegante agente de elite, responsável pelo bom funcionamento da máquina de Piltover e de Zaun, seu submundo. Adaptável e precisa, ela vê técnicas medíocres como uma vergonha que precisa ser consertada. Com uma mente tão afiada quanto suas lâminas, a busca de Camille por superioridade através de aprimoramentos hextec para seu corpo fez com que muitos se perguntassem se ela é agora mais máquina do que mulher.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/camille/')
        ativacaoBotao()
    } else if (nomeDado == 'CASSIOPEIA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte189be8189da97ea/5db05fb1bd24496c390ae4de/RiotX_ChampionList_cassiopeia.jpg?quality=90&width=250')
        champNome.innerHTML = 'Cassiopeia, o Abraço da Serpente'
        champBio.innerHTML = 'Cassiopeia é uma criatura mortal dedicada a manipular os outros para fazer suas vontades sinistras. A mais bela e mais nova filha da nobre família Du Couteau de Noxus aventurou-se pelas criptas profundas sob Shurima em busca de poderes ancestrais. Lá, ela foi mordida por um terrível guardião de uma tumba, cujo veneno a transformou em uma víbora predadora. Astuciosa e ágil, Cassiopeia agora desliza sob o véu da noite, petrificando seus inimigos com seu olhar nefasto.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/cassiopeia/')
        ativacaoBotao()
    } else if (nomeDado == `CHO'GATH` || nomeDado == 'CHO GATH' || nomeDado == 'CHOGATH') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4dfb71de3ddc8166/5db05fb13a326d6df6c0e7ad/RiotX_ChampionList_chogath.jpg?quality=90&width=250')
        champNome.innerHTML = `Cho'Gath, o Terror do Vazio`
        champBio.innerHTML = `A partir do momento em que Cho'Gath emergiu da terra para a luz do sol ofuscante de Runeterra, a besta foi motivada por pura fome insaciável. A mais perfeita expressão do desejo do Vazio de consumir toda a vida, a biologia complexa de Cho'Gath rapidamente converte matéria em crescimento corporal novo, aumentando sua massa e densidade muscular ou endurecendo sua carapaça externa como um diamante orgânico. Quando crescer não supre as necessidades dessa criatura do Vazio, ele vomita o material em excesso como espinhos afiados, deixando sua presa espetada e pronta para ser devorada mais tarde.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/cho-gath/')
        ativacaoBotao()
    } else if (nomeDado == 'CORKI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdd918c4d0a86347a/5db05fb1df78486c826dccee/RiotX_ChampionList_corki.jpg?quality=90&width=250')
        champNome.innerHTML = 'Corki, o Bombardeiro Ousado'
        champBio.innerHTML = 'Corki, o piloto yordle, ama duas coisas acima de qualquer outra: voar e seu glamoroso bigode... não necessariamente nessa ordem. Depois de deixar Bandópolis, ele se estabeleceu em Piltover e se apaixonou pelas máquinas maravilhosas que encontrou por lá. Ele se dedicou ao desenvolvimento de engenhocas voadoras, liderando uma força de defesa aérea de veteranos experientes conhecidos como os Serpentes Gritantes. Calmo sob fogo, Corki patrulha os céus ao redor de seu novo lar e nunca encontrou um problema que uma boa barragem de mísseis não pudesse resolver.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/corki/')
        ativacaoBotao()
    } else if (nomeDado == 'DARIUS') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt38b52be4a2cb1004/5db05fb19481396d6bdd01ac/RiotX_ChampionList_darius.jpg?quality=90&width=250')
        champNome.innerHTML = 'Darius, a Mão de Noxus'
        champBio.innerHTML = 'Não há símbolo maior do poder de Noxus do que Darius, o mais temido e experiente comandante da nação. Vindo de origens humildes para se tornar a Mão de Noxus, ele corta seu caminho através dos inimigos do império; muitos dos quais são, inclusive, noxianos. Sabendo que ele nunca duvida da integridade de sua causa e que nunca hesita assim que seu machado é levantado, aqueles que desafiam o comandante da Legião Trifária não esperam por misericórdia.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/darius/')
        ativacaoBotao()
    } else if (nomeDado == 'DIANA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt56570083d2a5e20e/5db05fbc823d426762825fdf/RiotX_ChampionList_diana.jpg?quality=90&width=250')
        champNome.innerHTML = 'Diana, o Escárnio da Lua'
        champBio.innerHTML = 'Empunhando sua espada lunar crescente, Diana luta como uma guerreira dos Lunari, um credo quase extinto nas terras ao redor do Monte Targon. Vestida com uma armadura brilhante da cor da neve de inverno noturna, ela é a personificação do poder da lua prateada. Dotada com a essência de um Aspecto de além do cume de Targon, Diana já não é mais totalmente humana e tem dificuldades para dominar seu poder e propósito neste mundo.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/diana/')
        ativacaoBotao()
    } else if (nomeDado == 'DR. MUNDO' || nomeDado == 'DR.MUNDO' || nomeDado == 'DR MUNDO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte88a3d7e9e408904/61b1ea136a78b87751002a68/RiotX_ChampionList_drmundo_v2.jpg?quality=90&width=250')
        champNome.innerHTML = 'Dr. Mundo, o Louco de Zaun'
        champBio.innerHTML = `Completamente maluco, tragicamente perigoso e terrivelmente roxo, Dr. Mundo é o que mantém muitos zaunitas dentro de casa nas noites mais escuras. Hoje se diz médico, mas ele já foi um paciente do manicômio mais infame de Zaun. Após ''curar'' toda a equipe do local, Dr. Mundo começou a atuar em sua nova profissão nos corredores vazios do lugar em que um dia fora tratado, repetindo os procedimentos extremamente antiéticos pelos quais ele mesmo havia passado. Munido de um armário cheio de remédios e nenhum conhecimento médico, ele fica mais monstruoso a cada nova injeção e continua instilando medo nos infelizes ''pacientes'' que passam perto de sua ''clínica''.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/dr-mundo/')
        ativacaoBotao()
    } else if (nomeDado == 'DRAVEN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc0be728e4cbb8f2a/5db05fbc89fb926b491ed80b/RiotX_ChampionList_draven.jpg?quality=90&width=250')
        champNome.innerHTML = 'Draven, o Carrasco de Noxus'
        champBio.innerHTML = 'Em Noxus, guerreiros conhecidos como Desafiadores lutam um contra o outro em uma arena onde sangue é derramado e a força é testada, mas nenhum foi tão celebrado como Draven. Antes um soldado, ele descobriu que as multidões apreciavam seu instinto pelo drama e sua habilidade suprema com seus machados giratórios. Viciado no espetáculo de sua própria perfeição impetuosa, Draven jurou derrotar qualquer que seja seu oponente para garantir que seu nome será cantado pelo império para todo o sempre.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/draven/')
        ativacaoBotao()
    } else if (nomeDado == 'EKKO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf22ba7e6328e4376/5db05fbd242f426df132f963/RiotX_ChampionList_ekko.jpg?quality=90&width=250')
        champNome.innerHTML = 'Ekko, o Rapaz que Estilhaçou o Tempo'
        champBio.innerHTML = 'Um prodígio das ruas violentas de Zaun, Ekko manipula o tempo para reverter qualquer situação a seu favor. Usando sua própria invenção, o Revo-Z, ele explora as possíveis bifurcações da realidade para criar o momento perfeito. Embora valorize muito sua liberdade, quando algo ameaça seus amigos, ele não mede esforços para defendê-los. Para meros observadores, Ekko parece conseguir o impossível sempre de primeira.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/ekko/')
        ativacaoBotao()
    } else if (nomeDado == 'ELISE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfe21ff2ddb84d5d1/5db05fbd0b39e86c2f83dc05/RiotX_ChampionList_elise.jpg?quality=90&width=250')
        champNome.innerHTML = 'Elise, a Aranha Rainha'
        champBio.innerHTML = 'Elise é uma predadora mortal que vive em um palácio escuro e reservado nas profundezas da cidade mais antiga de Noxus. Ela já foi mortal um dia, dama de uma família antes poderosa, mas a mordida de uma aranha peçonhenta a transformou em algo belo, imortal e completamente desumano, uma criatura aracnídea que atrai vítimas ingênuas para sua teia. Para manter sua eterna juventude, Elise agora prefere se alimentar dos inocentes e descrentes, e são poucos os que conseguem resistir aos seus encantos.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/elise/')
        ativacaoBotao()
    } else if (nomeDado == 'EVELYNN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte24b4c6ec1beebb9/5db05fbddf78486c826dccf4/RiotX_ChampionList_evelynn.jpg?quality=90&width=250')
        champNome.innerHTML = 'Evelynn, o Abraço da Agonia'
        champBio.innerHTML = 'Nas ruelas sombrias de Runeterra, a criatura demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua voluptuosa aparência de fêmea humana, mas assim que a vítima sucumbe ao seu charme, a verdadeira forma de Evelynn é revelada. A criatura então sujeita suas vítimas a um tormento inenarrável, gratificando-se com a dor alheia. Para ela, esses contatos são casinhos inocentes; Para o resto de Runeterra, são histórias macabras de encontros lascivos que deram errado e lembretes terríveis sobre o custo do desejo desenfreado.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/evelynn/')
        ativacaoBotao()
    } else if (nomeDado == 'EZREAL' || nomeDado == 'EZ') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60f687c95425f73f/5db05fbd2dc72966da746704/RiotX_ChampionList_ezreal.jpg?quality=90&width=250')
        champNome.innerHTML = 'Ezreal, o Explorador Pródigo'
        champBio.innerHTML = 'Um aventureiro arrojado, com um talento nato nas artes mágicas, Ezreal desbrava catacumbas soterradas, envolve-se com antigas maldições e supera com facilidade as situações mais improváveis. Sua coragem e ousadia não têm limites e ele prefere resolver as coisas no improviso, confiando parcialmente no seu talento, mas principalmente em sua mística luva shurimane, que ele usa para causar explosões arcanas devastadoras. Uma coisa é certa: quando Ezreal está por perto, lá vem problema. Ou lá vai. Ou já veio.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/ezreal/')
        ativacaoBotao()
    } else if (nomeDado == 'FIDDLESTICKS' || nomeDado == 'FIDDLE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt302d7b76f5fdf7e3/602a79c908c7305a9aa62767/RiotX_ChampionList_fiddlesticks.jpg?quality=90&width=250')
        champNome.innerHTML = 'Fiddlesticks, o Terror Ancestral'
        champBio.innerHTML = 'Algo despertou em Runeterra. Algo ancestral. Algo terrível. O eterno terror conhecido como Fiddlesticks vaga pelos confins do mundo mortal, atraído por áreas dominadas por uma paranoia palpável, onde se alimenta de vítimas apavoradas. Com sua foice afiada, essa criatura malformada e desgastada colhe a própria essência do medo, deixando a mente dos desafortunados que sobrevivem ao seu ataque totalmente fragmentada. Muito cuidado com o som dos corvos, ou com os sussurros de uma figura que parece <i>quase</i> humana... pois Fiddlesticks está de volta.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/fiddlesticks/')
        ativacaoBotao()
    } else if (nomeDado == 'FIORA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt935dd149b2617ac8/5db05fbcdc674266df3d5d36/RiotX_ChampionList_fiora.jpg?quality=90&width=250')
        champNome.innerHTML = 'Fiora, a Grande Duelista'
        champBio.innerHTML = 'A duelista mais temida de toda Valoran, Fiora é renomada tanto por suas maneiras bruscas e perspicácia quanto pela velocidade de sua rapieira de aço. Nascida na Casa Laurent no reino de Demacia, Fiora tomou o controle da família de seu pai no rastro de um escândalo que quase os destruiu. A reputação da Casa Laurent foi manchada, mas Fiora não mede esforços para restaurar a honra de sua família e devolvê-los a seu lugar de direito entre os melhores de Demacia.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/fiora/')
        ativacaoBotao()
    } else if (nomeDado == 'FIZZ') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6000fa69e03c25c0/5db05fbc56458c6b3fc17513/RiotX_ChampionList_fizz.jpg?quality=90&width=250')
        champNome.innerHTML = 'Fizz, o Trapaceiro das Marés'
        champBio.innerHTML = 'Fizz é um yordle anfíbio que vive entre os recifes que rodeiam Águas de Sentina. É comum que ele busque e devolva os dízimos jogados no mar por capitães supersticiosos, mas mesmo o mais velho dos marinheiros sabe que não é uma boa ideia irritá-lo. São muitas as histórias daqueles que subestimaram seu caráter escorregadio. Frequentemente confundido com algum tipo de espírito marinho imprevisível, ele comanda enormes bestas carnívoras das profundezas e se diverte confundindo tanto seus inimigos quanto seus aliados.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/fizz/')
        ativacaoBotao()
    } else if (nomeDado == 'GALIO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5890d1ab5c8be01f/5db05fc6823d426762825fe5/RiotX_ChampionList_galio.jpg?quality=90&width=250')
        champNome.innerHTML = 'Galio, o Colosso'
        champBio.innerHTML = 'Do lado de fora da reluzente cidade de Demacia, Galio, o colosso de pedra, vigia com zelo. Construído como bastião contra magos inimigos, ele geralmente permanece imóvel por décadas até que a presença de uma magia poderosa o desperte. Uma vez ativado, Galio aproveita bem o tempo, deleitando-se com a emoção de uma luta e da rara honra de defender seus compatriotas. Contudo, os triunfos dele são tanto doces quanto amargos, pois a magia que ele destrói é a mesma que o movimenta, e cada vitória o devolve à inércia.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/galio/')
        ativacaoBotao()
    } else if (nomeDado == 'GANKPLANK' || nomeDado == 'GP') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfdff3781ccfb2a5c/5db05fc689fb926b491ed811/RiotX_ChampionList_gangplank.jpg?quality=90&width=250')
        champNome.innerHTML = 'Gankplank, o Terror dos Doze Mares'
        champBio.innerHTML = 'Tão inesperado quanto brutal, o autointitulado Rei dos Ladrões conhecido como Gangplank é temido por todos os mares. Ele já reinou na cidade portuária de Águas de Sentina e, apesar de seu reinado ter terminado, existem aqueles que acreditam que isso só o tornou mais perigoso. Gangplank preferiria ver Águas de Sentina banhadas de sangue mais uma vez do que deixar que outro a controlasse. E agora, armado com pistola, sabre e barris de pólvora, ele está determinado a retomar o que perdeu.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/gangplank/')
        ativacaoBotao()
    } else if (nomeDado == 'GAREN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte41a162aed9339b7/5db05fc60b39e86c2f83dc0d/RiotX_ChampionList_garen.jpg?quality=90&width=250')
        champNome.innerHTML = 'Garen, o Poder de Demacia'
        champBio.innerHTML = 'Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida. Popular entre seus companheiros e respeitado o suficiente por seus inimigos, sua reputação é nada mais do que o esperado de um herdeiro da prestigiosa família Stemmaguarda, encarregada de defender Demacia e seus ideais. Vestido com uma armadura resistente à magia e empunhando uma poderosa espada, Garen está sempre pronto para confrontar magos e feiticeiros no campo de batalha, em um verdadeiro furacão de aço virtuoso.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/garen/')
        ativacaoBotao()
    } else if (nomeDado == 'GNAR') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta80f79dd96ee5d30/5db05fc6df78486c826dcd00/RiotX_ChampionList_gnar.jpg?quality=90&width=250')
        champNome.innerHTML = 'Gnar, o Yordle Pré-Histórico'
        champBio.innerHTML = 'Gnar é um yordle primitivo cujas artimanhas brincalhonas podem irromper em uma raiva infantil em um instante, transformando-o em uma besta gigantesca determinada a destruir. Congelada em Gelo Verdadeiro por milênios, essa criatura curiosa se libertou e agora saltita por um mundo mudado, que ela vê como exótico e maravilhoso. Encantado pelo perigo, Gnar atira tudo que puder nos seus inimigos, seja seu bumerangue ou um prédio próximo.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/gnar/')
        ativacaoBotao()
    } else if (nomeDado == 'GRAGAS') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt795841adba722f85/5db05fc43a326d6df6c0e7b9/RiotX_ChampionList_gragas.jpg?quality=90&width=250')
        champNome.innerHTML = 'Gragas, o Badernista'
        champBio.innerHTML = 'Igualmente alegre e imponente, Gragas é um gigante e arruaceiro mestre-cervejeiro em uma busca pessoal pelo mais perfeito caneco de cerveja. Vindo de partes desconhecidas, ele busca por ingredientes raros entre a vastidão intocada de Freljord, testando cada receita enquanto segue seu caminho. Frequente embriagado e extremamente impulsivo, ele é lendário pelas lutas de bar que começa, que quase sempre acabam em festas que duram a noite toda e em muitos danos de propriedade. Qualquer aparição de Gragas certamente será seguida de bebidas e destruição, nessa ordem.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/gragas/')
        ativacaoBotao()
    } else if (nomeDado == 'GRAVES') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2e7cd286d7b6182e/5e9a59c245a2a97194a1d4c7/RiotX_ChampionList_graves-cigar.jpg?quality=90&width=250')
        champNome.innerHTML = 'Graves, o Foragido'
        champBio.innerHTML = 'Malcolm Graves, mercenário, apostador e bandido de renome, é um homem procurado em cada uma das cidades e impérios que visitou. Apesar do seu temperamento explosivo, ele é dono de uma noção rigorosa de honra entre criminosos, normalmente aplicada com o fogo da sua espingarda, Destino. Nos últimos anos, ele reconciliou uma parceria problemática com Twisted Fate e, juntos, eles prosperaram mais uma vez no tumulto do submundo criminoso de Águas de Sentina.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/graves/')
        ativacaoBotao()
    } else if (nomeDado == 'GWEN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7a3d6c549708c048/607496eb1f74bb759da6a062/RiotX_ChampionList_gwen.jpg?quality=90&width=250')
        champNome.innerHTML = 'Gwen, a Costureira Encantada'
        champBio.innerHTML = 'Uma boneca que ganhou vida por magia, Gwen empunha as mesmas ferramentas que um dia a criaram. Valorizando todo instante, ela carrega a força do amor de sua criadora a cada passo e comanda a Névoa Sagrada, uma magia protetora ancestral que abençoou a tesoura, as agulhas e a linha de costura que ela usa. Tudo é novidade para Gwen, mas ela continua alegre e determinada a lutar pelo bem que ainda resta nesse mundo abatido.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/gwen/')
        ativacaoBotao()
    } else if (nomeDado == 'HECARIM') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blteb9ce5304ec48e19/5db05fc5df78486c826dccfa/RiotX_ChampionList_hecarim.jpg?quality=90&width=250')
        champNome.innerHTML = 'Hecarim, a Sombra da Guerra'
        champBio.innerHTML = 'Hecarim é a fusão espectral de homem e animal, amaldiçoado a cavalgar entre as almas dos vivos por toda a eternidade. Quando as Ilhas das Bênçãos caíram nas sombras, esse cavaleiro orgulhoso foi obliterado pelas energias destrutivas da Ruína, junto com toda sua cavalaria e suas montarias. Agora, assim que a Névoa Negra se espalha por Runeterra, ele lidera seu ataque devastador, deleitando-se com a matança e destruindo seus inimigos sob seus cascos de armadura.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/hecarim/')
        ativacaoBotao()
    } else if (nomeDado == 'HEIMERDINGER' || nomeDado == 'HEIMER') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd30d85446d154070/5db05fc57d28b76cfe4397ef/RiotX_ChampionList_heimerdinger.jpg?quality=90&width=250')
        champNome.innerHTML = 'Heimerdinher, o Inventor Idolatrado'
        champBio.innerHTML = 'Um cientista brilhante, mesmo que excêntrico, o Professor Cecil B. Heimerdinger é um dos inventores mais inovadores e estimados que Piltover já conheceu. Incansável em seu trabalho ao ponto da obsessão neurótica, ele busca responder as questões mais impenetráveis do universo. Apesar de suas teorias frequentemente parecerem obscuras e esotéricas, Heimerdinger produziu algumas das máquinas mais miraculosas, sem mencionar letais, de Piltover e ajusta constantemente suas invenções para torná-las ainda mais eficientes.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/heimerdinger/')
        ativacaoBotao()
    } else if (nomeDado == 'ILLAOI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc44e90a5547120a2/5db05fc5347d1c6baa57be2b/RiotX_ChampionList_illaoi.jpg?quality=90&width=250')
        champNome.innerHTML = 'Illaoi, a Sacerdotisa Cráquem'
        champBio.innerHTML = `O poderoso porte físico de Illaoi só perde para sua fé indomável. Como profetisa do Grande Cráquem, ela usa um gigantesco totem dourado para arrancar o espírito de seus inimigos de seus corpos e estilhaçar a sua percepção da realidade. Todos os que desafiam a ''Verdadeira Portadora de Nagacáburos'' logo descobrem que Illaoi nunca vai à luta sozinha — o deus da Ilha das Serpentes luta a seu lado.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/illaoi/')
        ativacaoBotao()
    } else if (nomeDado == 'IRELIA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf5f2b8de93870aef/5db05fcea6470d6ab91ce59a/RiotX_ChampionList_irelia.jpg?quality=90&width=250')
        champNome.innerHTML = 'Irelia, a Dançarina das Lâminas'
        champBio.innerHTML = 'A ocupação noxiana de Ionia produziu muitos heróis, mas nenhum era mais improvável do que a jovem Irelia de Navori. Treinada nas antigas danças de Ionia, ela adaptou sua arte à guerra, usando movimentos graciosos e cuidadosamente executados para levitar uma série de lâminas fatais. Após provar seu valor como guerreira, ela foi nomeada líder e representante da resistência e até hoje se dedica à preservação de sua terra natal.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/irelia/')
        ativacaoBotao()
    } else if (nomeDado == 'IVERN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5fff73e1df1873de/5db05fce7d28b76cfe4397f5/RiotX_ChampionList_ivern.jpg?quality=90&width=250')
        champNome.innerHTML = 'Ivern, o Pai do Verde'
        champBio.innerHTML = 'Ivern Bramblefoot, conhecido por muitos como o Protetor Verde, é um peculiar meio-homem, meio-árvore que vagueia pelas florestas de Runeterra, cultivando vida por onde ele passa. Ele conhece os segredos do mundo natural, e cultiva amizades profundas com tudo que cresce, voa e rasteja. Ivern caminha pela natureza, transmitindo sua estranha sabedoria a todos que ele encontra, enriquecendo as florestas e, ocasionalmente, confiando seus segredos a borboletas de língua solta.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/ivern/')
        ativacaoBotao()
    } else if (nomeDado == 'JANNA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt02bf5329f8abe45d/5db05fcedf78486c826dcd06/RiotX_ChampionList_janna.jpg?quality=90&width=250')
        champNome.innerHTML = 'Janna, a Fúria da Tormenta'
        champBio.innerHTML = 'Armada com o poder das ventanias de Runeterra, Janna é um misterioso e elemental espírito de vento que protege os desfavorecidos de Zaun. Alguns acreditam que Janna surgiu a partir dos clamores dos marinheiros de Runeterra, que rezavam por ventos mais amistosos enquanto navegavam por águas turbulentas e severas tempestades. Desde então, suas graças e sua proteção têm sido imploradas nas profundezas de Zaun, onde Janna se tornou um símbolo de esperança para os necessitados. Ninguém sabe onde nem quando ela pode aparecer, mas diversas vezes ela chega para ajudar.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/janna/')
        ativacaoBotao()
    } else if (nomeDado == 'JARVAN IV' || nomeDado == 'JARVAN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5898626d7016d222/5db05fcfdc674266df3d5d3c/RiotX_ChampionList_jarvaniv.jpg?quality=90&width=250')
        champNome.innerHTML = 'Jarvan IV, o Exemplo de Demacia'
        champBio.innerHTML = 'O Príncipe Jarvan, descendente da Dinastia Lumescudo, é o atual herdeiro do trono de Demacia. Criado para ser um exemplo das grandes virtudes de sua nação, ele é forçado a equilibrar as grandes expectativas colocadas sobre ele com seu próprio desejo de lutar nas linhas de frente. Jarvan inspira suas tropas com sua coragem temível e determinação altruísta, levantando a bandeira com as cores da família e revelando sua verdadeira força como futuro líder de seu povo.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/jarvan-iv/')
        ativacaoBotao()
    } else if (nomeDado == 'JAX') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6b301613598c3f17/5db05fcf89fb926b491ed81d/RiotX_ChampionList_jax.jpg?quality=90&width=250')
        champNome.innerHTML = 'Jax, o Grão Mestre das Armas'
        champBio.innerHTML = 'Incomparável tanto por suas habilidades com armamentos incomuns quanto pelo seu sarcasmo mordaz, Jax é o último mestre de armas de Icathia conhecido. Depois de sua terra natal ter sido derrotada por sua própria arrogância ao libertar o Vazio, Jax e seu povo juraram proteger o pouco que restou. Com a magia se espalhando pelo mundo, essa ameaça dormente acordou novamente e agora Jax vaga por Valoran carregando a última luz de Icathia e testando todo guerreiro encontrar para descobrir se algum deles é forte o suficiente para lutar ao seu lado...'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/jax/')
        ativacaoBotao()
    } else if (nomeDado == 'JAYCE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt51557edc36ad88a1/5db05fcf0b39e86c2f83dc13/RiotX_ChampionList_jayce.jpg?quality=90&width=250')
        champNome.innerHTML = 'Jayce, o Defensor do Amanhã'
        champBio.innerHTML = 'Jayce é um brilhante inventor que dedicou sua vida a defender Piltover e sua implacável busca pelo progresso. Com seu martelo hextech transformador em mãos, Jayce usa sua força, coragem e considerável inteligência para proteger sua cidade natal. Embora seja aclamado pela cidade como herói, ele não gosta muito da atenção que o heroísmo traz. Mesmo assim, o coração de Jayce está no lugar certo e até aqueles que invejam suas habilidades naturais são gratos à forma como ele protege a Cidade do Progresso.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/jayce/')
        ativacaoBotao()
    } else if (nomeDado == 'JHIN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbf6c70d9272a5a2a/5db05fcfe9d7526ab429e532/RiotX_ChampionList_jhin.jpg?quality=90&width=250')
        champNome.innerHTML = 'Jhin, o Virtuoso'
        champBio.innerHTML = 'Jhin é um meticuloso psicopata criminoso que acredita que o assassinato é uma arte. Outrora um prisioneiro ioniano, mas libertado por membros obscuros do conselho regimental de Ionia, o assassino serial agora trabalha como assassino de seu conluio. Usando a própria arma como pincel, Jhin cria obras artisticamente brutais, horrorizando vítimas e espectadores. Ele sente um cruel prazer ao fazer suas encenações nefastas, tornando-o a escolha ideal para transmitir a mais poderosa das mensagens: o terror.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/jhin/')
        ativacaoBotao()
    } else if (nomeDado == 'JINX') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta2cba784d9fad4b8/5db05fce89fb926b491ed817/RiotX_ChampionList_jinx.jpg?quality=90&width=250')
        champNome.innerHTML = 'Jinx, o Gatilho Desenfrado'
        champBio.innerHTML = 'Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e deixa alegremente sua marca caótica de pandemônio aonde quer que vá.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/jinx/')
        ativacaoBotao()
    } else if (nomeDado == 'KAISA' || nomeDado == `KAI'SA` || nomeDado == 'KAI SA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte38dc660dfe79204/5db05fce2dc72966da74670c/RiotX_ChampionList_kaisa.jpg?quality=90&width=250')
        champNome.innerHTML = `Kai'sa, a Filha do Vazio`
        champBio.innerHTML = `Capturada pelo Vazio quando era apenas uma criança, Kai'Sa conseguiu sobreviver por pura persistência e força de vontade. Suas experiências fizeram dela uma caçadora mortal e, para alguns, o prenúncio de um futuro que seria melhor não viver para ver. Inserida em uma desconfortável simbiose com uma carapaça viva do Vazio, é chegada a hora de decidir se ela perdoará os mortais que a chamam de monstro e derrotará a ameaçadora escuridão… ou se ela simplesmente os esquecerá, deixando o Vazio consumir o mundo que um dia também a deixou para trás.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kai-sa/')
        ativacaoBotao()
    } else if (nomeDado == 'KALISTA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb7f0196921c74e8c/5db05fcee9d7526ab429e52c/RiotX_ChampionList_kalista.jpg?quality=90&width=250')
        champNome.innerHTML = 'Kalista, a Lança da Vingança'
        champBio.innerHTML = 'Um espectro de ira e retaliação, Kalista é o espírito imortal da vingança, um pesadelo blindado invocado da Ilhas das Sombras para caçar desertores e traidores. Os traídos podem clamar em sangue para serem vingados, mas Kalista apenas responde àqueles cuja causa ela julga serem dignos de suas habilidades. Aqueles que se tornam o foco da fúria de Kalista devem fazer as pazes com seu destino, pois qualquer pacto selado com a caçadora sombria só pode terminar com o fogo frio e penetrante de suas lanças de alma.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kalista/')
        ativacaoBotao()
    } else if (nomeDado == 'KARMA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt39748c7b67252d6f/5db05fd70b39e86c2f83dc19/RiotX_ChampionList_karma.jpg?quality=90&width=250')
        champNome.innerHTML = 'Karma, a Iluminada'
        champBio.innerHTML = 'Nenhum mortal representa melhor as tradições espirituais de Ionia do que Karma. Ela é a incorporação de uma alma reencarnada inúmeras vezes, que leva todas as memórias acumuladas para cada nova vida e que foi agraciada com um poder que poucos compreendem. Nos períodos recentes de crise, ela fez tudo o que estava ao seu alcance pelo seu povo, mas sabe que a paz e a harmonia talvez só sejam possíveis a um custo considerável — tanto para ela quanto para sua amada terra.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/karma/')
        ativacaoBotao()
    } else if (nomeDado == 'KARTHUS') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt69b8fad9d1e78514/5db05fd7df78486c826dcd0c/RiotX_ChampionList_karthus.jpg?quality=90&width=250')
        champNome.innerHTML = 'Karthus, a Voz Mortal'
        champBio.innerHTML = 'Sendo o presságio do fim, Karthus é um espírito imortal cujas canções assombradoras são um prelúdio para o terror de sua aparição horripilante. Os vivos temem a eternidade dos mortos-vivos, mas Karthus vê apenas beleza e pureza em seu abraço, uma união perfeita de vida e morte. Quando Karthus emerge das Ilhas das Sombras, ele traz a alegria da morte aos mortais, como um apóstolo dos mortos-vivos.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/karthus/')
        ativacaoBotao()
    } else if (nomeDado == 'KASSADIN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt20773f2f67e00a74/5db05fd7bd24496c390ae4ea/RiotX_ChampionList_kassadin.jpg?quality=90&width=250')
        champNome.innerHTML = 'Kassadin, o Andarilho do Vazio'
        champBio.innerHTML = 'Cortando uma trilha de fogo pelos lugares mais sombrios do mundo, Kassadin sabe que seus dias estão contados. Outrora um aventureiro e guia shurimane, ele escolheu criar uma família perto das tribos pacíficas do sul, até o dia em que sua vila foi consumida pelo Vazio. Ele jurou vingança, combinando inúmeros artefatos arcanos e tecnologias proibidas para a luta que estava por vir. Finalmente, Kassadin partiu para as terras abandonadas de Icathia, pronto para enfrentar qualquer criatura monstruosa do Vazio em busca do seu autoproclamado profeta, Malzahar.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kassadin/')
        ativacaoBotao()
    } else if (nomeDado == 'KATARINA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb73e3edb5937676a/5db05fd7823d426762825feb/RiotX_ChampionList_katarina.jpg?quality=90&width=250')
        champNome.innerHTML = 'Katarina, a Lâmina Sinistra'
        champBio.innerHTML = 'Decisiva em seus julgamentos e letal em combate, Katarina é a assassina de maior calibre de Noxus. Filha mais velha do lendário General Du Couteau, Katarina é reconhecida por seus assassinatos eficientes contra inimigos desavisados. Sua ambição ardente a levou a buscar alvos extremamente protegidos, mesmo correndo o risco de colocar seus aliados em perigo; mas não importa a missão, Katarina não hesita ao executar seu dever no meio de um furacão de adagas serrilhadas.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/katarina/')
        ativacaoBotao()
    } else if (nomeDado == 'KAYLE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2c7675893b5c76bc/61b1ed442d06ff39b6c6336b/RiotX_ChampionList_kayle_v4.jpg?quality=90&width=250')
        champNome.innerHTML = 'Kayle, a Justa'
        champBio.innerHTML = 'Nascida de um Aspecto targonense no auge das Guerras Rúnicas, Kayle honrava o legado de sua mãe lutando por justiça com asas de chamas divinas. Ela e sua irmã gêmea, Morgana, foram as protetoras de Demacia por muitos anos, até Kayle se desiludir com as repetidas falhas dos mortais e abandonar de vez o plano mortal. Mesmo assim, reza a lenda que ela continua punindo malfeitores com suas espadas de fogo, e muitos esperam que um dia ela retorne…'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kayle/')
        ativacaoBotao()
    } else if (nomeDado == 'KAYN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt64edf2d3729b57c1/5db05fd656458c6b3fc17519/RiotX_ChampionList_kayn.jpg?quality=90&width=250')
        champNome.innerHTML = 'Kayn, o Ceifador das Sombras'
        champBio.innerHTML = 'Inigualável praticante da letal magia sombria, Shieda Kayn luta para alcançar seu verdadeiro destino: um dia comandar a Ordem das Sombras rumo a uma nova era de supremacia ioniana. Indiferente à maquiavélica degradação que ela causa em seu corpo e mente, ele empunha uma senciente arma darkin chamada Rhaast. Só duas coisas podem acontecer: ou Kayn faz a arma obedecê-lo... ou a foice maligna o consumirá completamente, preparando o terreno para a destruição de toda Runeterra.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kayn/')
        ativacaoBotao()
    } else if (nomeDado == 'KENNEN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc87932e656d1076e/5db05fd6adc8656c7d24e7dc/RiotX_ChampionList_kennen.jpg?quality=90&width=250')
        champNome.innerHTML = 'Kennen, o Coração da Tempestade'
        champBio.innerHTML = 'Mais do que um protetor rápido como um raio do equilíbrio ioniano, Kennen é o único yordle membro da Kinkou. Apesar da sua estatura pequena e peluda, ele anseia por ir contra qualquer ameaça com uma tempestade desenfreada de shurikens e entusiasmo sem limites. Ao lado de seu mestre, Shen, Kennen patrulha o reino dos espíritos, utilizando energia elétrica devastadora para abater seus inimigos.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kennen/')
        ativacaoBotao()
    } else if (nomeDado == `KHA'ZIX` || nomeDado == 'KHA ZIX' || nomeDado == 'KHAZIX') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt363d7d62846ffc87/5db05fd6e9effa6ba5295f9f/RiotX_ChampionList_khazix.jpg?quality=90&width=250')
        champNome.innerHTML = `Kha'Zix, o Ceifador do Vazio`
        champBio.innerHTML = `O Vazio cresce e o Vazio se adapta, e nenhuma de suas outras criaturas incorpora isso tão bem quanto Kha'Zix. A evolução é o que impulsiona a essência desse horror mutável, nascido para sobreviver e destruir os mais fortes. Qualquer momento de dificuldades em fazê-lo só o faz criar modos novos e mais efetivos de neutralizar e matar sua presa. Inicialmente uma fera irracional, a inteligência de Kha'Zix se desenvolveu tanto quanto sua forma. Agora, a criatura planeja suas caças e até faz uso do horror visceral que causa em suas vítimas.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kha-zix/')
        ativacaoBotao()
    }  else if (nomeDado == 'KINDRED') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc0f0007660b7a07b/5db05fd689fb926b491ed823/RiotX_ChampionList_kindred.jpg?quality=90&width=250')
        champNome.innerHTML = 'Kindred, os Caçadores Eternos'
        champBio.innerHTML = 'Distintos, mas nunca separados, os Kindred representam as essências gêmeas da morte. O arco da Ovelha propicia uma rápida transição do mundo mortal para aqueles que aceitam seu destino. O Lobo caça aqueles que fogem de seu fim, entregando-lhes a violência derradeira de suas presas esmagadoras. Embora diferentes interpretações sobre a natureza dos Kindred circulem por toda Runeterra, todo mortal deve escolher a verdadeira face de sua morte.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kindred/')
        ativacaoBotao()
    } else if (nomeDado == 'KLED') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1670a0dd8fd5edca/5db05fd66e8b0c6d038c5ca8/RiotX_ChampionList_kled.jpg?quality=90&width=250')
        champNome.innerHTML = 'Kled, o Cavaleiro Intratável'
        champBio.innerHTML = `Um guerreiro tão destemido quanto irascível, o yordle Kled representa a bravata furiosa de Noxus. Ele é um ícone amado pelos soldados do império, rejeitado por seus oficiais e abominado pela nobreza. Muitos dizem que Kled lutou em cada batalha que as legiões travaram, que ''adquiriu'' cada título militar e que nunca recuou de uma luta. Embora a veracidade dos detalhes seja normalmente questionável, uma parte de sua lenda é inegável: avançando em combate com Skaarl, sua montaria (des)confiável, Kled luta para proteger o que é dele... e para tornar seu o que conseguir.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kled/')
        ativacaoBotao()
    } else if (nomeDado == `KOG'MAW` || nomeDado == 'KOG MAW' || nomeDado == 'KOGMAW' || nomeDado == 'KOG') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaf483c8f812369fa/5db05fde823d426762825ff1/RiotX_ChampionList_kogmaw.jpg?quality=90&width=250')
        champNome.innerHTML = `Kog'Maw, a Boca do Abismo`
        champBio.innerHTML = `Vomitado para fora de uma aparição podre do Vazio nas profundezas das terras desertas de Icathia, Kog'Maw é uma criatura inquisitiva e pútrida com uma boca cáustica gigantesca. Essa criatura do Vazio em particular precisa morder e babar em qualquer coisa que alcançar para realmente compreendê-la. Apesar de não ser intrinsecamente mau, a ingenuidade cativante de Kog'Maw é perigosa, pois é precedida, em geral, de um frenesi alimentício, não para alimentá-lo, mas para satisfazer sua curiosidade sem fim.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/kog-maw/')
        ativacaoBotao()
    } else if (nomeDado == 'LEBLANC') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4aaf881bb90b509f/5db05fde6e8b0c6d038c5cae/RiotX_ChampionList_leblanc.jpg?quality=90&width=250')
        champNome.innerHTML = 'LeBlanc, a Farsante'
        champBio.innerHTML = 'Misteriosa mesmo para os outros membros da Rosa Negra, LeBlanc é somente um dos muitos nomes de uma mulher pálida que tem manipulado pessoas e eventos desde os primeiros dias de Noxus. Usando sua magia para espelhar a si mesma, a feiticeira pode aparecer para qualquer um, em qualquer lugar e mesmo em vários lugares ao mesmo tempo. Sempre planejando às escondidas, as verdadeiras motivações de LeBlanc são tão inescrutáveis quanto sua identidade inconstante.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/leblanc/')
        ativacaoBotao()
    } else if (nomeDado == 'LEE SIN' || nomeDado == 'LEESIN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt075d278529811445/5db05fde6af83b6d7032c8fe/RiotX_ChampionList_leesin.jpg?quality=90&width=250')
        champNome.innerHTML = 'Lee Sin, o Monge Cego'
        champBio.innerHTML = 'Um mestre das artes marciais ancestrais de Ionia, Lee Sin é um lutador de princípios fortes que canaliza a essência do espírito do dragão para enfrentar qualquer desafio. Apesar de ter perdido a visão há muitos anos, o monge guerreiro dedicou sua vida a proteger sua terra natal contra quem ousasse interferir em seu sagrado equilíbrio. Os inimigos que subestimam seu comportamento meditativo são confrontados por seus punhos ardentes e chutes mirabolantes.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/lee-sin/')
        ativacaoBotao()
    } else if (nomeDado == 'LEONA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8d46ada03ea1da8c/5db05fdf347d1c6baa57be31/RiotX_ChampionList_leona.jpg?quality=90&width=250')
        champNome.innerHTML = 'Leona, a Alvorada Radiante'
        champBio.innerHTML = 'Impregnada pelas chamas do sol, Leona é uma guerreira sagrada de Solari que defende o Monte Targon com sua Lâmina Zênite e a Proteção da Aurora. Sua pele brilha com fogo solar enquanto seus olhos queimam com o poder do Aspecto celestial que nela existe. Protegida em uma armadura dourada e carregando o terrível fardo de um conhecimento ancestral, Leona traz luz a alguns e morte a outros.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/leona/')
        ativacaoBotao()
    } else if (nomeDado == 'LILLIA') {
        champImg.setAttribute('src', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg')
        champNome.innerHTML = 'Lillia, o Florir Receoso'
        champBio.innerHTML = 'Extremamente tímida, Lillia, a faunesa feérica, percorre saltitante as florestas de Ionia. Sempre escondida a pouca distância dos humanos — cuja misteriosa natureza lhe causa fascínio e, ao mesmo tempo, receio — Lillia espera descobrir por que os sonhos deles não chegam mais à Árvore dos Sonhos. Agora, ela percorre Ionia com um cajado mágico nas mãos em busca dos sonhos não realizados das pessoas. Somente assim, a própria Lillia poderá florescer e ajudar os humanos a resolverem seus medos e encontrarem seu brilho interior. Iiip!'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/lillia/')
        ativacaoBotao()
    } else if (nomeDado == 'LISSANDRA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt08f869e897566c5b/5db05fdf7d28b76cfe439801/RiotX_ChampionList_lissandra.jpg?quality=90&width=250')
        champNome.innerHTML = 'Lissandra, a Bruxa Gélida'
        champBio.innerHTML = `A magia de Lissandra transforma o poder bruto do gelo em algo sombrio e terrível. Com a força do seu gelo sombrio, ela faz mais do que congelar — ela perfura e destrói todos que se opões a ela. Entre os aterrorizados habitantes do norte, ela é conhecida como a ''Bruxa Gélida''. Mas a verdade é muito mais sinistra: Lissandra é uma corruptora da natureza que conspira para instalar uma era do gelo no mundo.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/lissandra/')
        ativacaoBotao()
    } else if (nomeDado == 'LUCIAN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3db0d62352b0b4f1/5db05fdf6e8b0c6d038c5cb4/RiotX_ChampionList_lucian.jpg?quality=90&width=250')
        champNome.innerHTML = 'Lucian, o Purificador'
        champBio.innerHTML = 'Lucian, um Sentinela da Luz, é um caçador de espíritos imortais que usa suas pistolas relicárias para persegui-los implacavelmente e, por fim, aniquilá-los. Após o assassinato de sua esposa pelas mãos do espectro Thresh, Lucian embarcou em uma jornada de vingança. Mas mesmo com a volta de sua amada ao reino dos vivos, sua ira permanece inalterada. Impiedoso e obstinado, Lucian não hesitará em proteger os vivos contra os horrores da Névoa Negra.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/lucian/')
        ativacaoBotao()
    } else if (nomeDado == 'LULU') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt424f04814efb3aca/5db05fdfe9d7526ab429e538/RiotX_ChampionList_lulu.jpg?quality=90&width=250')
        champNome.innerHTML = 'Lulu, a Fada Feiticeira'
        champBio.innerHTML = 'A maga yordle Lulu é conhecida por conjurar ilusões de sonhos e criaturas fantasiosas enquanto vaga por Runeterra com seu silfo companheiro, Pix. Lulu transforma a realidade por capricho, distorcendo o que ela vê como restrições desse banal reino físico. Apesar de alguns considerarem sua magia no mínimo anormal, e no máximo perigosa, ela acredita que todos merecem um toque de encanto.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/lulu/')
        ativacaoBotao()
    } else if (nomeDado == 'LUX') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb94b4161d8022c45/5db05fdfe9d7526ab429e53c/RiotX_ChampionList_lux.jpg?quality=90&width=250')
        champNome.innerHTML = 'Lux, a Dama da Luz'
        champBio.innerHTML = 'Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades mágicas são vistas com medo e desconfiança. Capaz de dobrar a luz à sua vontade, ela cresceu temendo ser descoberta e exilada, e foi forçada a manter seus poderes em segredo a fim de preservar o status de nobreza de sua família. Apesar de tudo, o otimismo e resiliência de Lux a levaram a aceitar seus talentos únicos e agora ela os utiliza em segredo a serviço de sua terra natal.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/lux/')
        ativacaoBotao()
    } else if (nomeDado == 'MALPHITE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4d3b4a7e4c44ced7/5db05fdeadc8656c7d24e7e2/RiotX_ChampionList_malaphite.jpg?quality=90&width=250')
        champNome.innerHTML = 'Malphite, o Fragmento do Monolito'
        champBio.innerHTML = 'Uma criatura gigantesca de pedra viva, Malphite pena para impor ordem abençoada em um mundo caótico. Nascido como um fragmento servil de um obelisco de outro mundo conhecido como Monolito, ele usou sua tremenda força elemental para manter e proteger seu progenitor, mas, no fim, falhou. O único sobrevivente da destruição que se seguiu, Malphite agora suporta o povo macio de Runeterra com seus temperamentos inconstantes enquanto luta para encontrar um novo papel digno do último de sua espécie.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/malphite/')
        ativacaoBotao()
    } else if (nomeDado == 'MALZAHAR') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd58a3a2bf5035834/5db05fde0b39e86c2f83dc1f/RiotX_ChampionList_malzahar.jpg?quality=90&width=250')
        champNome.innerHTML = 'Malzahar, o Profeta do Vazio'
        champBio.innerHTML = 'Um vidente fanático dedicado à unificação de toda a vida, Malzahar realmente acredita que o Vazio que recém surgiu é o caminho para a salvação de Runeterra. Na desolação do deserto de Shurima, ele seguiu as vozes que sussurravam em sua mente por todo o caminho até a antiga Icathia. Entre as ruínas daquela terra, ele olhou no coração sombrio do próprio Vazio e recebeu novos poderes e propósito. Agora Malzahar vê a si mesmo como um pastor encarregado de trazer os outros para o rebanho… ou de libertar as criaturas do Vazio que vivem nas profundezas.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/malzahar/')
        ativacaoBotao()
    } else if (nomeDado == 'MAOKAI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt757d0e8855d51e03/5db05fe72140ec675d68f4a1/RiotX_ChampionList_maokai.jpg?quality=90&width=250')
        champNome.innerHTML = 'Maokai, o Ente Sinistro'
        champBio.innerHTML = 'Maokai é um grande ente enfurecido que luta contra os terrores sobrenaturais da Ilhas das Sombras. Ele se transformou em uma força vingativa depois que um cataclisma mágico destruiu seu lar, sobrevivendo apenas através das Águas da Vida que estão infusas em seu cerne. Outrora um espírito pacífico da natureza, Maokai agora batalha furiosamente para banir os flagelos da não-vida das Ilhas das Sombras e restaurar a antiga beleza do seu lar.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/maokai/')
        ativacaoBotao()
    } else if (nomeDado == 'MASTER YI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt46e861d7e6c0ab0c/5db05fe8df78486c826dcd12/RiotX_ChampionList_masteryi.jpg?quality=90&width=250')
        champNome.innerHTML = 'Master Yi, o Espadachim Wuju'
        champBio.innerHTML = 'Master Yi treinou seu corpo e afiou sua mente para que pensamento e ação se tornassem quase um só. Embora ele prefira recorrer à violência como último recurso, a leveza e a velocidade de sua espada garantem uma resolução sempre veloz. Como um dos últimos praticantes da arte ioniana do Wuju, Yi dedicou sua vida a preservar o legado de seu povo, avaliando potenciais discípulos com as Sete Lentes da Perspicácia para identificar qual deles era o mais digno.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/master-yi/')
        ativacaoBotao()
    } else if (nomeDado == 'MISS FORTUNE' || nomeDado == 'MF') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf36fa7fd7ecb59fb/5db05fe89481396d6bdd01b8/RiotX_ChampionList_missfortune.jpg?quality=90&width=250')
        champNome.innerHTML = 'Miss Fortune, a Caçadora de Recompensas'
        champBio.innerHTML = 'Uma capitã de Águas de Sentina famosa por sua aparência e impiedade, Sarah Fortune chama atenção entre os criminosos calejados da cidade portuária. Ainda criança, ela viu o Rei dos Ladrões, Gangplank, assassinar sua família, um crime do qual ela se vingou com violência anos depois, explodindo seu navio com ele ainda a bordo. Aqueles que a subestimarem enfrentarão uma oponente sedutora e imprevisível... E, possivelmente, uma bala ou duas nas entranhas.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/miss-fortune/')
        ativacaoBotao()
    } else if (nomeDado == 'MORDEKAISER') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2392a60ff2a2d726/5db05fe8242f426df132f96d/RiotX_ChampionList_mordekaiser.jpg?quality=90&width=250')
        champNome.innerHTML = 'Mordekaiser, o Revenã de Ferro'
        champBio.innerHTML = 'Morto e renascido duas vezes, Mordekaiser é um cruel comandante de uma época perdida. Ele usa a arte da necromancia para aprisionar almas e torná-las submissas pela eternidade. Hoje em dia, poucos se lembram das primeiras conquistas ou conhecem a real dimensão do poder de Mordekaiser. Porém, algumas almas ancestrais ainda se lembram, e temem que um dia ele volte para reivindicar seu domínio... tanto sobre os mortos quanto sobre os vivos.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/mordekaiser/')
        ativacaoBotao()
    } else if (nomeDado == 'MORGANA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc81eece55f126d2d/5db05fe86af83b6d7032c904/RiotX_ChampionList_morgana.jpg?quality=90&width=250')
        champNome.innerHTML = 'Morgana, a Caída'
        champBio.innerHTML = 'Dividida entre sua natureza mortal e celestial, Morgana prendeu as asas para preservar sua humanidade e inflige sua dor e amargura nos desonestos e corruptos. Ela rejeita as leis e tradições que considera injustas e luta pela verdade nas sombras de Demacia com escudos e correntes de fogo sombrio, ainda que alguns tentem reprimi-la. Acima de tudo, Morgana acredita que até os banidos e exilados podem, um dia, se erguer.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/morgana/')
        ativacaoBotao()
    } else if (nomeDado == 'NAMI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13bec39f49dc35ee/5db05fe956458c6b3fc1751f/RiotX_ChampionList_nami.jpg?quality=90&width=250')
        champNome.innerHTML = 'Nami, a Conjuradora das Marés'
        champBio.innerHTML = 'Uma jovem e obstinada vastaya dos mares, Nami é uma das primeiras integrantes da tribo Marai a sair das ondas e se aventurar na terra seca, onde seus antigos acordos com os targonianos foram quebrados. Com nenhuma outra opção, ela decidiu que seria ela mesma quem completaria o ritual sagrado que garantiria a segurança de seu povo. Dentro do caos dessa nova era, Nami enfrenta um futuro incerto com coragem e determinação, usando seu Conjurador das Marés para invocar a própria força dos oceanos.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/nami/')
        ativacaoBotao()
    } else if (nomeDado == 'NASUS') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt20a4b154b1756b56/5db05fe7a6470d6ab91ce5a0/RiotX_ChampionList_nasus.jpg?quality=90&width=250')
        champNome.innerHTML = 'Nasus, o Curador das Areias'
        champBio.innerHTML = 'Nasus é um majestoso Ascendente com cabeça de chacal da antiga Shurima; uma figura heroica considerada semideus pelo povo do deserto. Ferozmente inteligente, ele foi um guardião do conhecimento e estrategista sem igual cuja sabedoria guiou o antigo império de Shurima em direção à grandeza por muitos séculos. Após a queda do império, ele colocou a si mesmo em exílio, tornando-se mais que uma lenda. Agora que a antiga cidade de Shurima ressurgiu, ele retornou, determinado a assegurar que ela nunca mais caia.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/nasus/')
        ativacaoBotao()
    } else if (nomeDado == 'NAUTILUS') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf945a57aa16cea57/5db05fe7347d1c6baa57be37/RiotX_ChampionList_nautilus.jpg?quality=90&width=250')
        champNome.innerHTML = 'Nautilus, o Titã das Profundezas'
        champBio.innerHTML = 'O golias armadurado conhecido como Nautilus, uma lenda solitária, tão velha quantos as primeiras docas que afundaram em Águas de Sentina, vaga pelas águas escuras da costa das Ilhas da Chama Azul. Levado por uma traição esquecida, ele ataca sem aviso, balançando sua enorme âncora para salvar os náufragos e arrastar os gananciosos para sua perdição. Dizem que ele surge para aqueles que se esquecem de pagar o “dízimo de Águas de Sentina”, puxando-os para baixo das ondas junto com ele: um lembrete envolto em ferro de que ninguém pode escapar das profundezas.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/nautilus/')
        ativacaoBotao()
    } else if (nomeDado == 'NEEKO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta62eaac6ad26a4f5/5db05fe7adc8656c7d24e7ea/RiotX_ChampionList_neeko.jpg?quality=90&width=250')
        champNome.innerHTML = 'Neeko, a Camaleoa Curiosa'
        champBio.innerHTML = 'Nativa de uma tribo vastaya há muito esquecida, Neeko consegue se misturar em qualquer multidão, assumindo a aparência dos outros e até mesmo absorvendo parte de seu estado emocional para identificar de imediato quem é amigo ou inimigo. Nunca se sabe onde Neeko pode estar, nem mesmo quem pode ser, mas aqueles com a intenção de machucá-la logo verão suas verdadeiras cores e toda a força e magia de seu espírito primitivo agindo contra eles.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/neeko/')
        ativacaoBotao()
    } else if (nomeDado == 'NIDALEE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5a2da06d413f7c15/5db05ff1df78486c826dcd18/RiotX_ChampionList_nidalee.jpg?quality=90&width=250')
        champNome.innerHTML = 'Nidalee, a Caçadora Bestial'
        champBio.innerHTML = 'Criada na mais profunda das selvas, Nidalee é uma rastreadora especialista que pode se transformar em um puma à sua vontade. Nem animal nem mulher, ela defende com ferocidade seu território de todo e qualquer invasor, com armadilhas cuidadosamente colocadas e lanças arremessadas. Ela fere sua presa antes de pular nela em sua forma felina, e dizem os sortudos que sobrevivem que ela é uma mulher selvagem com instintos aguçados e garras ainda mais afiadas...'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/nidalee/')
        ativacaoBotao()
    } else if (nomeDado == 'NOCTURNE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfc73e3c7dda28d31/5db05ff2adc8656c7d24e7f0/RiotX_ChampionList_nocturne.jpg?quality=90&width=250')
        champNome.innerHTML = 'Nocturne, o Eterno Pesadelo'
        champBio.innerHTML = 'Uma fusão demoníaca provinda dos pesadelos que assombram todas as mentes sencientes, a coisa conhecida como Nocturne se tornou uma força primordial de puro terror. De aspecto caótico e líquido, ele é uma sombra sem rosto com olhos frios e armada com lâminas enfurecidas. Depois de se libertar do mundo dos espíritos, Nocturne desceu para o mundo dos vivos para se alimentar de um terror que só pode ser cultivado na verdadeira escuridão.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/nocturne/')
        ativacaoBotao()
    } else if (nomeDado == 'NUNU E WILLUMP' || nomeDado == 'NUNU') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf613746635c6d3c8/5db05ff256458c6b3fc17527/RiotX_ChampionList_nunu.jpg?quality=90&width=250')
        champNome.innerHTML = 'Nunu e Willump, o Garoto e seu Yeti'
        champBio.innerHTML = 'Era uma vez um garoto que queria provar a todos que poderia ser um herói indo matar um terrível monstro... mas que no fim descobriu que esse monstro era um solitário yeti mágico que só queria um amigo. Unidos por um antigo poder e compartilhando um amor por bolas de neve, Nunu e Willump agora vagavam ferozmente através de toda Freljord, soprando vida em aventuras imaginárias. Eles tinham esperança de que em algum lugar encontrariam a mãe de Nunu. Se pudessem salvá-la, talvez eles realmente fossem heróis afinal...'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/nunu/')
        ativacaoBotao()
    } else if (nomeDado == 'OLAF') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte922bda45062964b/5db05ff0a6470d6ab91ce5a6/RiotX_ChampionList_olaf.jpg?quality=90&width=250')
        champNome.innerHTML = 'Olaf, o Berserker'
        champBio.innerHTML = 'Uma força desenfreada de destruição, Olaf e seus machados não querem nada além de morrer em um combate glorioso. Vindo da brutal península de Freljord, Lokfar, ele recebeu uma profecia que dizia que ele teria uma morte pacífica: o destino de um covarde e um grande insulto entre seu povo. Procurando pela morte e movido por sua fúria, ele destruiu tudo em seu caminho, massacrando dezenas de guerreiros e bestas lendárias em busca de um oponente que pudesse pará-lo. Agora, um executor brutal da Garra do Inverno, ele busca seu fim nas grandes guerras que estão por vir.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/olaf/')
        ativacaoBotao()
    } else if (nomeDado == 'ORIANNA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3318fc0e8103706d/5db05ff02140ec675d68f4a7/RiotX_ChampionList_orianna.jpg?quality=90&width=250')
        champNome.innerHTML = 'Orianna, a Donzela Mecânica'
        champBio.innerHTML = 'Orianna já foi uma menina curiosa de carne e osso, mas agora é uma maravilha tecnológica composta inteiramente de engrenagens. Ela ficou terrivelmente doente depois de um acidente em um dos distritos inferiores de Zaun e seu corpo enfraquecido teve que ser substituído por mecanismos requintados, peça por peça. Acompanhada por uma esfera de cobre extraordinária que ela construiu para companhia e proteção, Orianna agora é livre para explorar as maravilhas de Piltover e além.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/orianna/')
        ativacaoBotao()
    } else if (nomeDado == 'ORNN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt639bacdfe8b1fd95/5db05ff1bd24496c390ae4f0/RiotX_ChampionList_ornn.jpg?quality=90&width=250')
        champNome.innerHTML = 'Ornn, o Fogo sob a Montanha'
        champBio.innerHTML = 'Ornn é o espírito Freljordano da forja e da artesania. Ele trabalha na solidão de uma enorme fornalha, construída a marteladas por entre as cavernas de lava do vulcão Pedra-Lar. Lá, ele aquece caldeirões de pedra fundida para purificar metais e forjar itens de qualidade insuperável. Quando outras divindades — principalmente Volibear — descem à Terra para intervir nos assuntos dos mortais, Ornn aparece para colocar esses seres impetuosos em seu devido lugar, seja com seu fiel martelo ou com o poder ardente das próprias montanhas.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/ornn/')
        ativacaoBotao()
    } else if (nomeDado == 'PANTHEON') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3f84c538bd36ef02/5db05ff17d28b76cfe43980d/RiotX_ChampionList_pantheon.jpg?quality=90&width=250')
        champNome.innerHTML = 'Pantheon, a Lança Indestrutível'
        champBio.innerHTML = 'Antes um relutante portador do Aspecto da Guerra, Atreus conseguiu sobreviver quando o poder celestial dentro dele foi morto, recusando-se a sucumbir a um golpe que arrancou estrelas do céu. Com o tempo, ele aprendeu a usar o poder de sua própria mortalidade e da persistente resiliência que veio com ela. Hoje, Atreus se opõe a tudo o que é divino com o renascimento de um novo Pantheon, e sua inabalável determinação é o que alimenta as armas do antigo Aspecto no campo de batalha.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/pantheon/')
        ativacaoBotao()
    } else if (nomeDado == 'POPPY') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0df0f7bcaf851737/5db05ff1242f426df132f973/RiotX_ChampionList_poppy.jpg?quality=90&width=250')
        champNome.innerHTML = 'Poppy, a Guardiã do Martelo'
        champBio.innerHTML = 'Runeterra não está em falta de campeões valentes, mas poucos são tão tenazes quanto Poppy. Carregando o lendário martelo de Orlon, uma arma que tem o dobro de seu tamanho, essa yordle determinada tem passado muitos anos procurando em segredo pelo lendário “Herói de Demacia”, dono legítimo do martelo. Até lá, ela cumpre seu dever entrando em batalhas e forçando os inimigos do reino a recuarem com cada giro de seu martelo.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/poppy/')
        ativacaoBotao()
    } else if (nomeDado == 'PYKE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt98269cb73e9fce70/5db05ff1347d1c6baa57be3d/RiotX_ChampionList_pyke.jpg?quality=90&width=250')
        champNome.innerHTML = 'Pyke, o Estripador das Águas Sangrentas'
        champBio.innerHTML = 'Um arpoador renomado vindo das Docas da Matança nas Águas de Sentina, Pyke deveria ter encontrado sua morte na barriga de um gigante Peixe-Jaula... mas, ainda assim, ele retornou. Agora, vagando pelos becos úmidos de sua cidade natal, ele usa seus novos dons sobrenaturais para trazer um rápido e grotesco fim para aqueles que fazem fortuna explorando os outros. Hoje, os mesmos habitantes da cidade que se orgulham de caçar monstros estão sendo caçados por um.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/pyke/')
        ativacaoBotao()
    } else if (nomeDado == 'QIYANA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta6148d8dca105d6b/5db05ff1e9effa6ba5295fa7/RiotX_ChampionList_qiyana.jpg?quality=90&width=250')
        champNome.innerHTML = 'Qiyana, a Imperatriz dos Elementos'
        champBio.innerHTML = 'Na cidade-selva de Ixaocan, Qiyana planeja seu próprio e implacável caminho até o trono de Yun Tal. Última na fila para suceder seus pais, ela enfrenta qualquer um no seu caminho com uma confiança impetuosa e domínio sem precedentes sobre a magia elemental. Com a própria terra obedecendo a todos os seus comandos, Qiyana se vê como a maior elementalista na história de Ixaocan. Por esse motivo, julga-se merecedora não apenas de uma cidade, mas de todo um império.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/qiyana/')
        ativacaoBotao()
    } else if (nomeDado == 'QUINN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5cc3e3a189961d90/5db05ffbadc8656c7d24e7fc/RiotX_ChampionList_quinn.jpg?quality=90&width=250')
        champNome.innerHTML = 'Quinn, as Asas de Demacia'
        champBio.innerHTML = 'Quinn é uma cavaleira patrulheira de elite de Demacia que cumpre missões perigosas no coração do território inimigo. Ela e sua águia lendária, Valor, possuem um vínculo inquebrável e seus inimigos muitas vezes são mortos antes de notarem que não estão lutando contra um, mas dois dos maiores heróis do reino. Ágil e acrobática quando necessário, Quinn mira com sua balestra, enquanto Valor, do alto, marca seus alvos esquivos, fazendo deles uma dupla letal no campo de batalha.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/quinn/')
        ativacaoBotao()
    } else if (nomeDado == 'RAKAN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbe844b30961ccb7c/5db05ffb2140ec675d68f4ad/RiotX_ChampionList_rakan.jpg?quality=90&width=250')
        champNome.innerHTML = 'Rakan, o Charmoso'
        champBio.innerHTML = 'Inconsistente e charmoso, Rakan é um conhecido encrenqueiro vastaya e o melhor dançarino de batalha da história da tribo Lhotlan. Para os humanos das montanhas de Ionia, seu nome sempre foi sinônimo de festivais mirabolantes, festas agitadas e música subversiva. Poucos suspeitariam que este artista itinerante e energético é parceiro da rebelde Xayah e totalmente dedicado à causa dela.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/rakan/')
        ativacaoBotao()
    } else if (nomeDado == 'RAMMUS') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt50cccb68a58349f5/5db05ffbdc674266df3d5d48/RiotX_ChampionList_rammus.jpg?quality=90&width=250')
        champNome.innerHTML = 'Rammus, o Tatu Blindado'
        champBio.innerHTML = 'Idolatrado por muitos, dispensado por alguns e misterioso para todos, Rammus é um ser curioso e enigmático. Protegido por um casco espetado, ele inspira teorias cada vez mais divergentes sobre sua origem por onde quer que passe — de semideus, a oráculo sagrado, a uma fera qualquer que foi transformada por magia. Qualquer que seja a verdade, Rammus mantém seus pareceres e não interrompe seu caminho por ninguém enquanto vaga sem rumo pelo deserto shurimane.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/rammus/')
        ativacaoBotao()
    } else if (nomeDado == `REK'SAI` || nomeDado == 'REK SAI' || nomeDado == 'REKSAI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4affff3ef114e99b/5db05ffb347d1c6baa57be43/RiotX_ChampionList_reksai.jpg?quality=90&width=250')
        champNome.innerHTML = `Rek'Sai, a Escavadora do Vazio`
        champBio.innerHTML = `A predadora perfeita, Rek'Sai é uma criatura do Vazio sem piedade que anda por túneis no subsolo para emboscar e devorar vítimas desavisadas. Sua fome insaciável já destruiu regiões inteiras do outrora gigantesco império de Shurima. Mercadores, vendedores, até mesmo caravanas blindadas, preferem fazer longos desvios para evitarem a ela e seus filhotes no seu território de caça. Todos sabem que, se Rek'Sai for avistada no horizonte, a morte certamente virá do subsolo.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/rek-sai/')
        ativacaoBotao()
    } else if (nomeDado == 'RELL') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0091d81986fe44c7/5fd43df38593bc52457eecc4/RiotX_ChampionList_Rell_v2.jpg?quality=90&width=250')
        champNome.innerHTML = 'Rell, a Dama de Ferro'
        champBio.innerHTML = 'Produto de um experimento brutal nas mãos da Rosa Negra, Rell é uma arma humana rebelde que está determinada a destruir Noxus. Sua infância foi repleta de sofrimento e horror; a jovem teve que suportar procedimentos indescritíveis para aperfeiçoar e fortalecer seu controle mágico do metal – até que, um dia, empreendeu uma fuga violenta, matando muitos de seus captores no processo. Agora, Rell é tida como criminosa e ataca qualquer soldado noxiano que apareça diante dela. Ao mesmo tempo, procura sobreviventes de sua antiga "academia", defendendo os fracos enquanto despacha violentamente seus antigos supervisores para a morte.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/rell/')
        ativacaoBotao()
    } else if (nomeDado == 'RENEKTON') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6b5bb4d917759184/5db05ffb242f426df132f979/RiotX_ChampionList_renekton.jpg?quality=90&width=250')
        champNome.innerHTML = 'Renekton, o Carniceiro das Areias'
        champBio.innerHTML = 'Renekton é um aterrorizante e furioso ser Ascendente dos desertos escaldantes de Shurima. Ele já foi o guerreiro mais estimado de todo o seu império, levando os exércitos da nação a inúmeras vitórias. No entanto, após a queda do império, Renekton foi enterrado nas areias e, lentamente, enquanto o mundo girava e mudava, ele sucumbia à loucura. Novamente liberto, ele é consumido pelo desejo de encontrar e matar seu irmão Nasus, a quem culpa pelos séculos que passou na escuridão graças à própria loucura.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/renekton/')
        ativacaoBotao()
    } else if (nomeDado == 'RENGAR') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt282bc8e033db4123/5db05ff9adc8656c7d24e7f6/RiotX_ChampionList_rengar.jpg?quality=90&width=250')
        champNome.innerHTML = 'Rengar, o Acossador da Alcateia'
        champBio.innerHTML = `Rengar é um feroz caçador de troféus vastaya que gosta da emoção proporcionada pela caça e pelo abate de criaturas perigosas. Ele vasculha o mundo em busca das feras mais perigosas que pode encontrar, procurando principalmente por Kha'Zix, a criatura do vazio que arrancou seu olho. Rengar não persegue suas presas por fome nem por glória, mas pela simples beleza da caçada.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/rengar/')
        ativacaoBotao()
    } else if (nomeDado == 'RIVEN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3925b81c7462e26e/5db05ffadc674266df3d5d42/RiotX_ChampionList_riven.jpg?quality=90&width=250')
        champNome.innerHTML = 'Riven, a Exilada'
        champBio.innerHTML = 'Outrora mestra das espadas nos esquadrões de Noxus, agora Riven é uma expatriada em uma terra que um dia já tentou conquistar. Depois de alcançar os altos escalões do exército usando a força de sua convicção e sua brutal eficiência, ela foi recompensada com uma lâmina rúnica lendária e sua própria milícia. No entanto, no fronte ioniano, a fé de Riven em sua terra natal foi testada e, no fim, quebrada. Tendo cortado todos os laços com o império, agora ela busca seu lugar em um mundo devastado, mesmo diante de rumores de que a própria Noxus passou por uma transformação...'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/riven/')
        ativacaoBotao()
    } else if (nomeDado == 'RUMBLE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd7c76610fa29d8d6/5db05ffa7d28b76cfe439813/RiotX_ChampionList_rumble.jpg?quality=90&width=250')
        champNome.innerHTML = 'Rumble, a Ameaça Mecânica'
        champBio.innerHTML = 'Rumble é um jovem inventor irritadiço. Usando nada além de suas próprias mãos e uma pilha de sucata, o yordle briguento construiu um mecha colossal montado com um arsenal de arpões eletrificados e foguetes incendiários. Apesar de outros rirem de suas criações de ferro-velho, Rumble não se importa. Afinal, é ele que tem um cospe-fogo.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/rumble/')
        ativacaoBotao()
    } else if (nomeDado == 'RYZE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8af977ce4fa7804b/5db05ffa2dc72966da746714/RiotX_ChampionList_ryze.jpg?quality=90&width=250')
        champNome.innerHTML = 'Ryze, o Mago Rúnico'
        champBio.innerHTML = 'Considerado pela grande maioria como o mago mais habilidoso de Runeterra, Ryze é um arquimago ancião e amargo que carrega um enorme peso. Dotado de um enorme poder arcano e de uma notável estrutura física, ele busca incansavelmente pelas Runas Globais, que são fragmentos de magia pura que um dia criaram o mundo a partir do nada. Ele deve recuperar esses artefatos antes que eles caiam em mãos erradas, pois Ryze conhece bem os horrores que eles podem infligir em Runeterra.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/ryze/')
        ativacaoBotao()
    } else if (nomeDado == 'SAMIRA') {
        champImg.setAttribute('src', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg')
        champNome.innerHTML = 'Samira, a Rosa do Deserto'
        champBio.innerHTML = 'Samira encara a morte nos olhos com confiança inabalável, procurando diversão e adrenalina aonde quer que vá. Depois que seu lar em Shurima foi destruído quando ainda era criança, ela encontrou sua verdadeira vocação em Noxus, onde conquistou fama como a guerreira valente e estilosa que aceitava missões arriscadas do mais alto calibre. Empunhando pistolas de pólvora negra e uma espada personalizada, Samira prospera em circunstâncias de vida ou morte, eliminando – com estilo e rapidez – qualquer um que cruze seu caminho.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/samira/')
        ativacaoBotao()
    } else if (nomeDado == 'SEJUANI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte4d521b893aa5a3e/5db05ffae9d7526ab429e544/RiotX_ChampionList_sejuani.jpg?quality=90&width=250')
        champNome.innerHTML = 'Sejuani, a Fúria do Norte'
        champBio.innerHTML = 'Sejuani é a mãe de guerra Glacinata brutal e implacável da Garra do Inverno, uma das tribos mais temidas de Freljord. A sobrevivência de seu povo é uma batalha constante e desesperada contra os elementos, forçando-os a pilhar noxianos, demacianos e avarosianos para sobreviver aos invernos severos. A própria Sejuani lidera os ataques mais perigosos, montada no seu javali drüvask, Bristle, usando seu mangual de Gelo Verdadeiro para congelar e despedaçar seus inimigos.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/sejuani/')
        ativacaoBotao()
    } else if (nomeDado == 'SENNA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt24f4735ebde3c22b/5db08d642dc72966da74686e/RiotX_ChampionList_senna.jpg?quality=90&width=250')
        champNome.innerHTML = 'Senna, a Redentora'
        champBio.innerHTML = 'Amaldiçoada desde a infância a ser perseguida pelo fenômeno sobrenatural da Névoa Negra, Senna se juntou à ordem dos Sentinelas da Luz e lutou bravamente contra seu destino. Ela acabou sendo morta e teve sua alma aprisionada em uma lanterna pelo cruel espectro Thresh. No entanto, por se recusar a perder as esperanças, ela aproveitou seu tempo dentro da lanterna para aprender a usar a Névoa, ressurgindo com uma nova vida e sabendo que jamais voltaria a ser a mesma. Agora, armada com as forças da luz e da escuridão, Senna busca exterminar a Névoa Negra, atraindo o fenômeno para si mesma a cada disparo de sua arma relicária e salvando as almas perdidas que ali residem.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/senna/')
        ativacaoBotao()
    } else if (nomeDado == 'SERAPHINE') {
        champImg.setAttribute('src', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg')
        champNome.innerHTML = 'Seraphine, a Cantora Sonhadora'
        champBio.innerHTML = 'Nascida em Piltover e filha de zaunitas, Seraphine é capaz de ouvir a alma das pessoas. O mundo canta para ela, e ela canta em resposta. Esses sons a perturbavam quando era mais jovem, mas hoje ela os usa como inspiração, transformando o caos em uma sinfonia. A cantora se apresenta nas cidades irmãs para lembrar a seus cidadãos que eles não estão sozinhos, que são mais fortes juntos e que, aos olhos dela, o potencial deles é ilimitado.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/seraphine/')
        ativacaoBotao()
    } else if (nomeDado == 'SETT') {
        champImg.setAttribute('src', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg')
        champNome.innerHTML = 'Sett, o Chefe'
        champBio.innerHTML = 'Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus. Mesmo estreando como um simples desafiante nas arenas de combate em Navori, ele logo conquistou notoriedade com sua força bruta e capacidade de suportar dor contínua e extrema. Agora, após superar todos os combatentes locais, Sett chegou até o topo e reina sobre as arenas onde um dia lutara.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/sett/')
        ativacaoBotao()
    } else if (nomeDado == 'SHACO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc8b1d1ba926d01cc/5db060036e8b0c6d038c5cba/RiotX_ChampionList_shaco.jpg?quality=90&width=250')
        champNome.innerHTML = 'Shaco, o Bufão Demoníaco'
        champBio.innerHTML = 'Criado anos atrás como um brinquedo para um príncipe solitário, Shaco, a marionete encantada, agora se deleita com assassinatos e desordem. Corrompido por magia das trevas e pela perda de seu dono querido, o boneco que já fora gentil agora encontra prazer somente na miséria das próprias almas que ele atormenta. Ele usa brinquedos e truques simples para conseguir efeitos mortais, achando os resultados de seus “jogos” sangrentos hilários. E para aqueles que escutam uma risada sombria na calada da noite, o Bufão Demoníaco pode tê-los marcado como seu próximo brinquedo.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/shaco/')
        ativacaoBotao()
    } else if (nomeDado == 'SHEN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd142d174831b78e9/5db06004242f426df132f97f/RiotX_ChampionList_shen.jpg?quality=90&width=250')
        champNome.innerHTML = 'Shen, o Olho do Crepúsculo'
        champBio.innerHTML = 'Para os guerreiros ionianos sigilosos conhecidos como Kinkou, Shen, o Olho do Crepúsculo, é um líder. Ele busca permanecer livre da confusão das emoções, preconceito ou ego, caminhando pelo caminho nunca visto do julgamento imparcial entre o reino dos espíritos e o mundo físico. Incumbido de impor harmonia entre os dois, Shen empunha lâminas de aço e energia arcana contra qualquer um que ameaçar o equilíbrio.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/shen/')
        ativacaoBotao()
    } else if (nomeDado == 'SHYVANA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdb320ec49e0e02a7/5db0600456458c6b3fc1752d/RiotX_ChampionList_shyvana.jpg?quality=90&width=250')
        champNome.innerHTML = 'Shyvana, a Meio-Dragão'
        champBio.innerHTML = 'Shyvana é uma criatura com a mágica de um fragmento de runa queimando em seu coração. Apesar de normalmente parecer humanoide, ela pode mudar para sua forma verdadeira de um temível dragão, incinerando seus inimigos com seu sopro de chamas. Depois de salvar a vida do príncipe herdeiro, Jarvan IV, Shyvana agora serve, mesmo que desconfortavelmente, na sua guarda real, lutando para encontrar aceitação entre o povo receoso de Demacia.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/shyvana/')
        ativacaoBotao()
    } else if (nomeDado == 'SINGED') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt766d98c27adfde28/5db06004347d1c6baa57be4f/RiotX_ChampionList_singed.jpg?quality=90&width=250')
        champNome.innerHTML = 'Singed, o Químico Louco'
        champBio.innerHTML = 'Singed é um alquimista zaunita de intelecto inigualável, que devotou sua vida a ultrapassar os limites do conhecimento; e nenhum preço, nem sua própria sanidade, é alto demais. Existe cura para sua loucura? Suas misturas raramente falham, mas, para muitos, Singed perdeu qualquer noção da humanidade, deixando uma trilha tóxica de miséria e terror no seu caminho.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/singed/')
        ativacaoBotao()
    } else if (nomeDado == 'SION') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7f28f1d689e4ad3d/5db06004adc8656c7d24e802/RiotX_ChampionList_sion.jpg?quality=90&width=250')
        champNome.innerHTML = 'Sion, o Colosso Morto-Vivo'
        champBio.innerHTML = 'Um herói de guerra de uma era passada, Sion era reverenciado em Noxus por ter estrangulado a vida de um rei demaciano com suas próprias mãos. Mas o esquecimento lhe foi negado quando foi ressuscitado para servir seu império, mesmo na sua morte. Seu massacre indiscriminado levou qualquer um que estivesse em seu caminho, sem importar sua lealdade, provando que ele não possui mais nada de sua antiga humanidade. Mesmo assim, com armadura bruta pregada em carne apodrecida, Sion continua a investir na batalha em total abandono, lutando para se lembrar do seu verdadeiro ser entre cada ataque de seu machado.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/sion/')
        ativacaoBotao()
    } else if (nomeDado == 'SIVIR') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbe8ea8bfd98ec1f3/5db06002a6470d6ab91ce5ac/RiotX_ChampionList_sivir.jpg?quality=90&width=250')
        champNome.innerHTML = 'Sivir, a Mestra da Batalha'
        champBio.innerHTML = 'Sivir é uma renomada caçadora de recompensas e capitã mercenária que manipula o comércio nos desertos de Shurima. Armada com sua lendária lâmina em cruz adornada, ela lutou e venceu incontáveis batalhas por aqueles que podem pagar seu preço exorbitante. Conhecida por sua resolução audaz e ambição sem fim, ela se orgulha de recuperar tesouros secretos das perigosas tumbas de Shurima — por um bom preço. Com forças anciãs remexendo os ossos da própria Shurima, Sivir encontra-se dividida entre destinos conflitantes.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/sivir/')
        ativacaoBotao()
    } else if (nomeDado == 'SKARNER') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt842a8149ba8b7a3d/5db06003bd24496c390ae4f6/RiotX_ChampionList_skarner.jpg?quality=90&width=250')
        champNome.innerHTML = 'Skarner, a Vânguarda de Cristal'
        champBio.innerHTML = 'Skarner é um imenso escorpião cristalino de um vale escondido de Shurima. Parte da antiga raça dos Brackern, Skarner e seus semelhantes são conhecidos por seu grande conhecimento e profunda conexão com a terra, pois suas almas são infundidas com poderosos cristais vivos que mantêm as memórias de seus ancestrais. Em uma era muito antiga, os Brackern entraram em hibernação para evitar uma destruição mágica imprevista, mas eventos ameaçadores recentes despertaram Skarner. Sendo o único Brackern acordado, ele luta para proteger seus semelhantes daqueles que buscam lhes fazer mal.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/skarner/')
        ativacaoBotao()
    } else if (nomeDado == 'SONA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4810827f74fc21b9/5db06003347d1c6baa57be49/RiotX_ChampionList_sona.jpg?quality=90&width=250')
        champNome.innerHTML = 'Sona, a Mestra das Cordas'
        champBio.innerHTML = 'Sona é um dos maiores prodígios em etwahl de cordas em Demacia, falando somente através de seus acordes graciosos e de suas árias vibrantes. Seu comportamento refinado cativou os nobres, apesar de muitos suspeitarem que suas melodias fascinantes realmente emanem magia, um tabu em Demacia. Silenciosa com desconhecidos, mas compreendida de alguma forma por companheiros próximos, Sona dedilha suas harmonias não somente para aliviar a dor de seus aliados, mas também para derrubar inimigos desavisados.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/sona/')
        ativacaoBotao()
    } else if (nomeDado == 'SORAKA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2141839fdc483592/5db06003e9effa6ba5295fad/RiotX_ChampionList_soraka.jpg?quality=90&width=250')
        champNome.innerHTML = 'Soraka, a Filha das Estrelas'
        champBio.innerHTML = 'Uma andarilha vinda de dimensões celestiais além do Monte Targon, Soraka desistiu de sua imortalidade para proteger as raças mortais de seus instintos mais violentos. Ela pretende espalhar as virtudes da compaixão e da misericórdia a todos que encontra, curando até mesmo aqueles que desejam seu mal. E apesar de ter visto todas as dificuldades deste mundo, Soraka ainda acredita que o povo de Runeterra não alcançou todo seu potencial.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/soraka/')
        ativacaoBotao()
    } else if (nomeDado == 'SWAIN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1a64e469280b8b9f/5db060030b39e86c2f83dc25/RiotX_ChampionList_swain.jpg?quality=90&width=250')
        champNome.innerHTML = 'Swain, o Grande General Noxiano'
        champBio.innerHTML = 'Jericho Swain é o líder visionário de Noxus, uma nação expansionista que venera apenas a força. Apesar de ter sido abatido e mutilado nas guerras ionianas, onde perdeu o braço esquerdo, ele tomou o controle do império com uma determinação implacável... e uma nova mão demoníaca. Agora, Swain comanda os esquadrões da linha de frente, marchando contra uma escuridão que se aproxima e que somente ele pode ver – em vislumbres capturados por corvos sombrios dos cadáveres à sua volta. Em um turbilhão de sacrifícios e segredos, o maior segredo de todos é que o verdadeiro inimigo vem de dentro.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/swain/')
        ativacaoBotao()
    } else if (nomeDado == 'SYLAS') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf8ea29aa48fc5e35/5db0600cadc8656c7d24e808/RiotX_ChampionList_sylas.jpg?quality=90&width=250')
        champNome.innerHTML = 'Sylas, o Abjugado'
        champBio.innerHTML = 'Criado em um dos bairros mais pobres de Demacia, Sylas de Dregbourne se tornou o símbolo do lado mais sombrio da Grande Cidade. Quando criança, sua habilidade de identificar magia chamou a atenção de importantes caçadores de magos, que depois o aprisionaram por ter se virado contra eles. Finalmente livre, agora Sylas vive como um rígido revolucionário, usando a magia das pessoas ao seu redor para destruir o reino ao qual servia… e o grupo de magos exilados que o segue só faz crescer.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/sylas/')
        ativacaoBotao()
    } else if (nomeDado == 'SYNDRA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd9308eedab3a6fa5/5db0600c3a326d6df6c0e7bf/RiotX_ChampionList_syndra.jpg?quality=90&width=250')
        champNome.innerHTML = 'Syndra, a Soberana Sombria'
        champBio.innerHTML = 'Syndra é uma temida maga ioniana com um poder incrível ao seu dispor. Quando criança, ela causava pavor nos anciões da aldeia com sua magia imprudente e indomada. Mandada embora para aprender a controlar seus poderes, ela terminou descobrindo que seu suposto mentor estava reprimindo suas habilidades. Transformando seus sentimentos de traição e mágoa em obscuras esferas de energia, Syndra jurou destruir todos que tentarem controlá-la.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/syndra/')
        ativacaoBotao()
    } else if (nomeDado == 'TAHM KENCH' || nomeDado == 'TK') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt87be9cf38f3bc986/5db0600c56458c6b3fc17533/RiotX_ChampionList_tahmkench.jpg?quality=90&width=250')
        champNome.innerHTML = 'Tahm Kench, o Rei do Rio'
        champBio.innerHTML = 'Conhecido por muitos nomes ao longo da história, Tahm Kench viaja pelas águas de Runeterra alimentando seu insaciável apetite com o sofrimento alheio. Apesar de parecer particularmente encantador e orgulhoso, ele vaga pelo reino físico como um andarilho em busca de presas desavisadas. Sua língua pode atordoar até o guerreiro mais blindado a uma grande distância, e cair em sua barriga retumbante é como cair em um abismo do qual não há esperança de sair.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/tahm-kench/')
        ativacaoBotao()
    } else if (nomeDado == 'TALIYAH') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt35c3537198ee86b9/5db05fc52140ec675d68f49b/RiotX_ChampionList_ialiyah.jpg?quality=90&width=250')
        champNome.innerHTML = 'Taliyah, a Tecelã de Pedras'
        champBio.innerHTML = 'Taliyah é uma maga nômade de Shurima, dividida entre sua empolgação juvenil e suas grandes responsabilidades. Ela cruzou quase toda Valoran em uma jornada para conhecer a verdadeira natureza de seus próprios poderes, apesar de ter retornado recentemente para proteger sua tribo. Há aqueles que já interpretaram sua compaixão como fraqueza e pagaram o preço por isso, pois, debaixo do comportamento juvenil de Taliyah, existe uma determinação forte o suficiente para mover montanhas e um espírito feroz o suficiente para fazer a terra tremer.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/taliyah/')
        ativacaoBotao()
    } else if (nomeDado == 'TALON') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt20a737f99ebcd027/5db0600c89fb926b491ed829/RiotX_ChampionList_talon.jpg?quality=90&width=250')
        champNome.innerHTML = 'Talon, a Sombra da Lâmina'
        champBio.innerHTML = 'Talon é a adaga na escuridão, um assassino impiedoso capaz de atacar sem aviso e escapar antes que qualquer alarme soe. Ele construiu uma reputação perigosa nas ruas brutais de Noxus, onde foi forçado a lutar, matar e roubar para sobreviver. Adotado pela notória família Du Couteau, ele agora usa suas habilidades mortais seguindo os comandos do império, assassinando líderes inimigos, capitães e heróis… além de qualquer noxiano tolo o suficiente para ganhar o desprezo de seus mestres.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/talon/')
        ativacaoBotao()
    } else if (nomeDado == 'TARIC') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6b2d37773c3621e1/5db0600d347d1c6baa57be55/RiotX_ChampionList_taric.jpg?quality=90&width=250')
        champNome.innerHTML = 'Taric, o Escudo de Valoran'
        champBio.innerHTML = 'Taric é o Aspecto do Protetor, portando um incrível poder como o guardião da vida, do amor e da beleza de Runeterra. Punido por faltar ao cumprimento de seu dever e exilado de Demacia, sua terra natal, Taric subiu o Monte Targon em busca de redenção, mas acabou por descobrir um chamado maior dentre as estrelas. Imbuído do poder ancestral de Targon, o Escudo de Valoran agora mantém vigilância contra a pérfida corrupção do Vazio.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/taric/')
        ativacaoBotao()
    } else if (nomeDado == 'TEEMO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt30ddbbdc0549078a/5db0600da6470d6ab91ce5b8/RiotX_ChampionList_teemo.jpg?quality=90&width=250')
        champNome.innerHTML = 'Teemo, o Explorador Veloz'
        champBio.innerHTML = 'Indiferente até aos obstáculos mais perigosos e ameaçadores, Teemo vasculha o mundo com infinito entusiasmo e animação. Um yordle com uma inabalável moral que se orgulha de seguir o Código dos Escoteiros de Bandópolis, às vezes com tanta dedicação que não se toca das possíveis consequências de suas ações. Embora alguns duvidem da existência dos escoteiros, uma coisa é certa: nunca se deve duvidar das convicções de Teemo.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/teemo/')
        ativacaoBotao()
    } else if (nomeDado == 'THRESH') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt46555de3bfa94d44/5db0600b2140ec675d68f4b5/RiotX_ChampionList_thresh.jpg?quality=90&width=250')
        champNome.innerHTML = 'Thresh, o Guardião das Correntes'
        champBio.innerHTML = 'Sádico e astuto, Thresh é um espírito ambicioso e incansável das Ilhas das Sombras. Ele já foi guardião de incontáveis segredos arcanos, mas acabou sucumbindo a poderes maiores do que a vida e a morte. Agora, Thresh vive atormentando e corrompendo vítimas de forma lenta e dolorosamente criativa. Seus alvos sofrem muito além de seus corpos mortais, pois Thresh aflige as próprias almas, aprisionando-as em sua lanterna maldita para torturá-las por toda a eternidade.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/thresh/')
        ativacaoBotao()
    } else if (nomeDado == 'TRISTANA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfbbc3205edf5207a/5db0600bdc674266df3d5d50/RiotX_ChampionList_tristana.jpg?quality=90&width=250')
        champNome.innerHTML = 'Tristana, a Artilheora Yordle'
        champBio.innerHTML = 'Apesar de muitos outros yordles focarem sua energia em descobertas, invenções ou simplesmente travessuras, Tristana sempre se inspirou nas aventuras de grandes guerreiros. Ela ouviu muito sobre Runeterra, suas facções e suas guerras, e acreditava que sua raça também poderia se tornar digna de lendas. Pisando no mundo pela primeira vez, ela pegou seu canhão de confiança, Boomer, e agora salta para a batalha com coragem e otimismo inabaláveis.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/tristana/')
        ativacaoBotao()
    } else if (nomeDado == 'TRUNDLE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt05eb0518bbe963c0/5db0600ba6470d6ab91ce5b2/RiotX_ChampionList_trundle.jpg?quality=90&width=250')
        champNome.innerHTML = 'Trundle, o Rei dos Trolls'
        champBio.innerHTML = 'Trundle é um troll gigantesco e traiçoeiro com uma tendência particularmente perversa, e não há nada que ele não possa submeter a cacetadas, nem mesmo a própria Freljord. Violentamente territorial, ele persegue qualquer um tolo o suficiente de entrar em seu domínio. Então, com seu enorme porrete de Gelo Verdadeiro, ele gela seus inimigos até os ossos e os empala com pilares dentados congelados, rindo enquanto eles sangram na tundra.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/trundle/')
        ativacaoBotao()
    } else if (nomeDado == 'TRYNDAMERE' || nomeDado == 'TRYNDA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b217144ed3a7faa/5db08d643a326d6df6c0e907/RiotX_ChampionList_tryndamere.jpg?quality=90&width=250')
        champNome.innerHTML = 'Tryndamere, o Rei Bárbaro'
        champBio.innerHTML = 'Carregado por fúria e raiva desenfreadas, Tryndamere galgou seu caminho através de Freljord, desafiando abertamente os maiores guerreiros do norte em preparo para os dias sombrios que virão. O bárbaro furioso já procurou por vingança pela aniquilação de seu clã, mas recentemente ele encontrou uma companhia em Ashe, a mãe de guerra de Avarosa, além de um lar entre seu povo. Sua força quase desumana e resistência são lendárias, e elas permitiram que ele e seus aliados conquistassem muitas vitórias contra as maiores adversidades.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/tryndamere/')
        ativacaoBotao()
    } else if (nomeDado == 'TWISTED FATE' || nomeDado == 'TF') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaebcdb8b21d440a7/5db0600ce9effa6ba5295fb3/RiotX_ChampionList_twistedfate.jpg?quality=90&width=250')
        champNome.innerHTML = 'Twisted Fate, o Mestre das Cartas'
        champBio.innerHTML = 'Twisted Fate é um infame trapaceiro que apostou e encantou tudo em seu caminho por boa parte do mundo, conquistando a inimizade e admiração tanto de ricos quanto tolos. Ele raramente leva coisas a sério, saudando cada dia com um sorriso zombeteiro e elegância negligente. Twisted Fate sempre tem um ás na manga, não importa como.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/twisted-fate/')
        ativacaoBotao()
    } else if (nomeDado == 'TWITCH') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt674dca7d5611ebb0/5db060159481396d6bdd01be/RiotX_ChampionList_twitch.jpg?quality=90&width=250')
        champNome.innerHTML = 'Twitch, o Semeador da Peste'
        champBio.innerHTML = 'Um rato zaunita empesteado de nascença e um apreciador da imundície por paixão, Twitch não tem medo de sujar as patas. Mirando com uma balestra embebida em químicos no centro do coração dourado de Piltover, ele jurou mostrar àqueles na cidade de cima quão imundos eles realmente são. Sempre à espreita, quando ele não está se esgueirando no Sumidouro, ele está cavando fundo no lixo dos outros por tesouros descartados… e talvez um sanduíche bolorento.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/twitch/')
        ativacaoBotao()
    } else if (nomeDado == 'UDYR' || nomeDado == 'UGA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8350eda62a9ed56c/5db060150b39e86c2f83dc2b/RiotX_ChampionList_udyr.jpg?quality=90&width=250')
        champNome.innerHTML = 'Udyr, o Andarilho Espiritual'
        champBio.innerHTML = 'Udyr é mais do que um homem; ele é um recipiente para o poder indomado de quatro espíritos animais primitivos. Ao incorporar a natureza bestial dos espíritos, Udyr pode fazer uso de suas forças únicas: o tigre lhe concede velocidade e ferocidade; a tartaruga, resiliência; o urso, força; e a fênix, sua chama imortal. A junção desses poderes permite que Udyr se volte contra todos aqueles que tentam ferir a ordem natural.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/udyr/')
        ativacaoBotao()
    } else if (nomeDado == 'URGOT') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt162b78ba3ece1d4f/5db060157d28b76cfe43981b/RiotX_ChampionList_urgot.jpg?quality=90&width=250')
        champNome.innerHTML = 'Udyr, o Encouraçado'
        champBio.innerHTML = 'Na época em que era um poderoso carrasco noxiano, Urgot foi traído pelo império para o qual havia tirado tantas vidas. Aprisionado em correntes de ferro, ele foi forçado a aprender o verdadeiro significado da força na Draga — uma mina carcerária nas profundezas de Zaun. Após emergir de um desastre que espalhou o caos por toda a cidade, ele se tornou uma figura imponente no submundo criminoso da cidade. Hoje ele usa as mesmas correntes que o aprisionaram para erguer suas vítimas e seu objetivo é expurgar todos os seres indignos do seu novo lar, tornando-o um crisol de dor.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/urgot/')
        ativacaoBotao()
    } else if (nomeDado == 'VARUS') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt596158d85a8360d1/5db060132dc72966da74671a/RiotX_ChampionList_varus.jpg?quality=90&width=250')
        champNome.innerHTML = 'Varus, '
        champBio.innerHTML = 'Um dos antigos darkin, Varus era um assassino mortal que amava atormentar seus inimigos, levando-os quase à insanidade antes de disparar a flecha mortal. Ele foi aprisionado no final da Grande Guerra dos Darkin, mas fugiu, séculos depois, na carne recomposta de dois caçadores ionianos que o libertaram involuntariamente, condenando-o a carregar o arco que contém suas essências. Agora Varus caça aqueles que o aprisionaram para decretar sua vingança brutal, mas as almas mortais dentro dele ainda resistem a cada passo do caminho.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/varus/')
        ativacaoBotao()
    } else if (nomeDado == 'VAYNE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9eaabc908956c8b0/5db060146af83b6d7032c90a/RiotX_ChampionList_vayne.jpg?quality=90&width=250')
        champNome.innerHTML = 'Vayne, a Caçadora Noturna'
        champBio.innerHTML = 'Shauna Vayne é uma caçadora de monstros demaciana mortal e implacável que dedicou sua vida a encontrar e destruir o monstro que assassinou sua família. Armada com uma balestra em seu pulso e com um coração cheio de vingança, ela só é realmente feliz quando está matando praticantes ou criações das artes obscuras, atacando das sombras com um turbilhão de dardos de prata.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/vayne/')
        ativacaoBotao()
    } else if (nomeDado == 'VEIGAR') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltda2b568b0c3e5847/5db06014e9effa6ba5295fb9/RiotX_ChampionList_veigar.jpg?quality=90&width=250')
        champNome.innerHTML = 'Veigar, o Pequeno Mestre do Mal'
        champBio.innerHTML = 'Veigar, um mestre entusiasta da feitiçaria das trevas, aderiu a poderes dos quais poucos mortais se aproximam. Um habitante inconformado de Bandópolis, ele desejava ultrapassar as limitações da magia yordle, se voltando, então, para os textos arcanos que permaneceram escondidos por milhares de anos. Agora uma criatura teimosa com uma fascinação sem fim pelos mistérios do universo, Veigar é constantemente subestimado por outros. E mesmo que ele acredite ser verdadeiramente mau, ele possui um senso de ética interior que leva alguns a se perguntarem sobre suas verdadeiras motivações.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/veigar/')
        ativacaoBotao()
    } else if (nomeDado == `VEL'KOZ` || nomeDado == 'VEL KOZ' || nomeDado == 'VELKOZ') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt825d0c333f6e74ae/5db060142140ec675d68f4bb/RiotX_ChampionList_velkoz.jpg?quality=90&width=250')
        champNome.innerHTML = `Vel'Koz, o Olho do Vazio`
        champBio.innerHTML = `Não é claro se Vel'Koz foi a primeira criatura do Vazio a aparecer em Runeterra, mas certamente nunca houve outra que se igualasse ao seu nível de compreensão cruel e calculista. Enquanto sua raça devora ou perverte tudo ao seu redor, ele busca, em vez disso, examinar e estudar o domínio físico, assim como os estranhos seres guerreiros que habitam nele, por quaisquer fraquezas que o Vazio possa explorar. Mas Vel'Koz está longe de ser um observador passivo e é capaz de atacar ameaças com plasma mortal ou desfazer o próprio tecido do mundo.`
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/vel-koz/')
        ativacaoBotao()
    } else if (nomeDado == 'VEX') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltad313195d6b48daa/614e702764c8007a9bdec6b2/RiotX_ChampionList_vex.jpg?quality=90&width=250')
        champNome.innerHTML = 'Vex, a Melancolista'
        champBio.innerHTML = 'Em meio à escuridão das Ilhas das Sombras, uma solitária yordle se move com pesar, abrindo caminho pela névoa espectral, satisfeita em viver nas trevas. Com uma poderosa sombra no seu encalço e uma fonte inesgotável de mazelas nas costas, Vex vive num mundinho de agonia que ela mesma criou, longe da alegria repulsiva do mundo dos "normais". Apesar de não ser a mais ambiciosa das yordles, perto dela a cor e a felicidade não têm vez. Com sua indisposição mágica, ela afasta qualquer possível intrometido.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/vex/')
        ativacaoBotao()
    } else if (nomeDado == 'VI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3bd79abf330fc807/5db06014dc674266df3d5d56/RiotX_ChampionList_vi.jpg?quality=90&width=250')
        champNome.innerHTML = 'Vi, a Defensora de Piltover'
        champBio.innerHTML = 'Antiga criminosa das ruas violentas de Zaun, Vi é uma mulher temível, impulsiva e explosiva que tem muito pouco respeito por autoridades. Após ter crescido completamente só, Vi desenvolveu instintos de sobrevivência extremamente certeiros e um senso de humor extremamente ácido. Agora trabalhando com os Vigias de Piltover para manter a paz, ela porta poderosas manoplas hextec capazes de esmagar paredes e suspeitos com a mesma facilidade.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/vi/')
        ativacaoBotao()
    } else if (nomeDado == 'VIEGO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt17591d0be6f2888f/600f2aee5ad9610f6cb7880c/RiotX_ChampionList_viego.jpg?quality=90&width=250')
        champNome.innerHTML = 'Viego, o Rei Destruído'
        champBio.innerHTML = 'Outrora regente de um reino perdido, Viego morreu há mais de um milênio, quando uma tentativa de trazer sua esposa de volta à vida culminou em uma catástrofe mágica conhecida como "a Ruína". Transformado em um poderoso espectro morto-vivo, e sempre sendo torturado pela paixão obsessiva que sente por sua rainha morta há séculos, Viego agora é conhecido como o Rei Destruído. Hoje, ele controla os Tormentos enquanto assola Runeterra em busca de qualquer coisa que possa trazê-la de volta, destruindo tudo que estiver em seu caminho conforme a Névoa Negra emana de seu cruel coração partido.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/viego/')
        ativacaoBotao()
    } else if (nomeDado == 'VIKTOR') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6e54b3de49b7bbf3/5db06015df78486c826dcd1e/RiotX_ChampionList_viktor.jpg?quality=90&width=250')
        champNome.innerHTML = 'Viktor, o Arauto das Máquinas'
        champBio.innerHTML = 'Viktor, o arauto de uma nova era de tecnologia, devotou sua vida ao avanço da humanidade. Um idealista que busca elevar o povo de Zaun a um novo nível de compreensão, ele acredita que somente ao aceitar a evolução gloriosa da tecnologia será possível que a humanidade alcance seu verdadeiro potencial. Com um corpo melhorado por aço e ciência, Viktor é zeloso na sua busca por este brilhante futuro.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/viktor/')
        ativacaoBotao()
    } else if (nomeDado == 'VLADIMIR') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt39ab5027f6fa1b81/5db0601589fb926b491ed82f/RiotX_ChampionList_vladimir.jpg?quality=90&width=250')
        champNome.innerHTML = 'Vladimir, o Sanguinário Escarlate'
        champBio.innerHTML = 'Um demônio sedento pelo sangue dos mortais, Vladimir tem influenciado os acontecimentos de Noxus desde os primórdios do império. Além de ter estendido sua vida por meios não naturais, sua maestria em hemomancia o permite controlar as mentes e corpos de outros como se fossem os seus. Nos exuberantes salões da aristocracia noxiana, isso possibilitou que construísse um culto fanático de personalidades ao seu redor, tudo isso para que ele possa sangrar seus inimigos nos becos escuros.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/vladimir/')
        ativacaoBotao()
    } else if (nomeDado == 'VOLIBEAR') {
        champImg.setAttribute('src', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg')
        champNome.innerHTML = 'Volibear, a Tempestade Implacável'
        champBio.innerHTML = 'Para aqueles que ainda o veneram, Volibear é a forma manifestada da tempestade. Destrutivo, selvagem e implacavelmente obstinado, ele já existia antes mesmo que os mortais andassem sobre a tundra de Freljord, protegendo as terras que ele e seus irmãos semideuses criaram. Com um ódio profundo pela civilização e pela fraqueza inerente a ela, Volibear luta para recuperar os velhos costumes de quando a terra era selvagem e o sangue jorrava livremente. Ele enfrenta todos aqueles que ousam entrar em seu caminho com dentes, garras e dominação estrondosa.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/volibear/')
        ativacaoBotao()
    } else if (nomeDado == 'WARWICK') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt08a92f3897cfc8f5/5db0601ddc674266df3d5d5c/RiotX_ChampionList_warwick.jpg?quality=90&width=250')
        champNome.innerHTML = 'Warwick, a ira Desimpedida de Zaun'
        champBio.innerHTML = 'Warwick é um monstro que caça pelas ruas cinzentas de Zaun. Transformado a partir de experimentos agonizantes, seu corpo agora é fundido a um sistema complexo de câmaras e bombas, um maquinário que enche suas veias com fúria química. Ele persegue os criminosos que aterrorizam as profundezas da cidade, movimentando-se pelas sombras. Warwick é atraído por sangue; para ele, esse aroma é enlouquecedor. Ninguém que derrama sangue é capaz de fugir dele.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/warwick/')
        ativacaoBotao()
    } else if (nomeDado == 'WUKONG') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaf44673e1a16af30/5db05fe87d28b76cfe439807/RiotX_ChampionList_monkeyking.jpg?quality=90&width=250')
        champNome.innerHTML = 'Wukong, o Macaco Rei'
        champBio.innerHTML = 'Wukong é um trapaceiro vastaya que usa sua força, agilidade e inteligência para confundir os oponentes e deixar a situação a seu favor. Depois de encontrar uma eterna amizade no guerreiro conhecido como Master Yi, Wukong se tornou o último aprendiz da ancestral arte marcial conhecida como Wu Ju. Armado com um cajado encantado, Wukong tenta evitar que Ionia caia em ruína.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/wukong/')
        ativacaoBotao()
    } else if (nomeDado == 'XAYAH') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0d029ccdb18a4299/5db0601ba6470d6ab91ce5be/RiotX_ChampionList_xayah.jpg?quality=90&width=250')
        champNome.innerHTML = 'Xayah, a Rebelde'
        champBio.innerHTML = 'Mortal e precisa, Xayah é uma vastaya revolucionária que trava sua própria batalha para salvar seu povo. Ela usa sua agilidade, malícia e plumas afiadas para retalhar qualquer um que atrapalhe seu caminho. Xayah luta ao lado de seu parceiro e amante, Rakan, para proteger sua tribo em extinção e restaurar a antiga glória de sua raça.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/xayah/')
        ativacaoBotao()
    } else if (nomeDado == 'XARATH') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbda694c8890e94e5/5db0601ce9effa6ba5295fbf/RiotX_ChampionList_xeratth.jpg?quality=90&width=250')
        champNome.innerHTML = 'Xerath, o Mago Ascendente'
        champBio.innerHTML = 'Xerath é um mago Ascendente da antiga Shurima, um ser de energia arcana que existe em meio a estilhaços de um sarcófago mágico. Por milênios, ele ficou enclausurado debaixo das areias do deserto, mas o ressurgimento de Shurima o libertou de sua antiga prisão. Enlouquecido pelo próprio poder, ele agora busca tomar o que crê ser seu por direito e substituir as civilizações existentes do mundo com uma criada em sua própria imagem.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/xerath/')
        ativacaoBotao()
    } else if (nomeDado == 'XIN ZHAO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltca4486a1630ef517/5db0601ce9d7526ab429e54a/RiotX_ChampionList_xinzhao.jpg?quality=90&width=250')
        champNome.innerHTML = 'Xin Zhao, o Senescal de Demacia'
        champBio.innerHTML = 'Xin Zhao é um guerreiro determinado, leal à dinastia Lumescudo. No passado, ele foi condenado a lutar como gladiador em Noxus, e sobreviveu à incontáveis lutas, mas depois de ser libertado por forças demacianas, ele prometeu sua vida e lealdade aos seus corajosos salvadores. Armado com sua lança de três pontas favorita, Xin Zhao agora luta pelo reino que adotou, desafiando com audácia qualquer inimigo, não importando as chances de vitória.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/xin-zhao/')
        ativacaoBotao()
    } else if (nomeDado == 'YASUO' || nomeDado == 'LIXO') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3a319fc884dc6880/5db0601c242f426df132f985/RiotX_ChampionList_yasuo.jpg?quality=90&width=250')
        champNome.innerHTML = 'Yasuo, o Imperdoável'
        champBio.innerHTML = 'Yasuo, um ioniano extremamente determinado, é também um ágil espadachim que usa o próprio ar como arma para enfrentar seus inimigos. Quando jovem, ele teve seu orgulho ferido ao ser acusado injustamente do assassinato de seu mestre — sem conseguir provar sua inocência, ele foi forçado a matar o próprio irmão para se defender. Até hoje, mesmo depois do verdadeiro assassino do seu mestre ter sido revelado, Yasuo ainda não consegue se perdoar e vaga por sua terra natal com apenas o vento para guiar sua espada.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/yasuo/')
        ativacaoBotao()
    } else if (nomeDado == 'YONE') {
        champImg.setAttribute('src', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg')
        champNome.innerHTML = 'Yone, o Inesquecido'
        champBio.innerHTML = 'Em vida, ele foi Yone; meio-irmão de Yasuo e um respeitado aluno da escola de espadachins de seu vilarejo. Mas, ao morrer pelas mãos do irmão, ele se viu perseguido por uma entidade maligna do reino espiritual e foi forçado a exterminá-la com sua própria espada. Agora, condenado a usar uma máscara demoníaca com o rosto da entidade, Yone busca incansavelmente essas criaturas para tentar entender o que ele mesmo se tornou.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/yone/')
        ativacaoBotao()
    } else if (nomeDado == 'YORICK') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570d89dd9a76ba08/5db0601c823d426762825ff9/RiotX_ChampionList_yorick.jpg?quality=90&width=250')
        champNome.innerHTML = 'Yorick, o Pastor de Almas'
        champBio.innerHTML = 'Último sobrevivente de uma ordem religiosa há muito esquecida, Yorick é ao mesmo tempo abençoado e amaldiçoado pelo poder que exerce sobre os mortos. Preso nas Ilhas das Sombras, suas únicas companhias são os defuntos e espíritos atormentados que ele atrai para si. As ações monstruosas de Yorick mascaram seu nobre propósito: libertar sua terra da maldição da Ruína.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/yorick/')
        ativacaoBotao()
    } else if (nomeDado == 'YUUMI') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta312e7cca0e594d1/5db0601d2140ec675d68f4c1/RiotX_ChampionList_yuumi.jpg?quality=90&width=250')
        champNome.innerHTML = 'Yuumi, a Gata Mágica'
        champBio.innerHTML = 'Uma gata mágica de Bandópolis, Yuumi já foi a mascote de uma feiticeira yordle chamada Norra. Mas quando sua mestra desapareceu misteriosamente, Yuumi se tornou a Guardiã do Livro dos Portais de Norra, viajando à procura dela através dos portais nas páginas. Sentindo falta do carinho de sua mestra, Yuumi busca diversas companhias em sua jornada, protegendo a todos com escudos luminosos e determinação ferrenha. Enquanto Livro se esforça para mantê-la focada na tarefa, Yuumi costuma se distrair com regalias mundanas, como cochilos e peixe para o jantar. Porém, no fim das contas, ela sempre retoma a missão: encontrar sua querida amiga.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/yuumi/')
        ativacaoBotao()
    } else if (nomeDado == 'ZAC') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9412083c2b98b9c8/5db0601d6af83b6d7032c910/RiotX_ChampionList_zac.jpg?quality=90&width=250')
        champNome.innerHTML = 'Zac, a Arma Secreta'
        champBio.innerHTML = 'Zac é produto de um derramamento tóxico que percorreu um tubo quimtec e se armazenou em uma caverna isolada no Sumidouro de Zaun. Apesar de suas origens humildes, Zac deixou de ser uma lama qualquer e se tornou um ser pensante que mora nos encanamentos da cidade e emerge ocasionalmente para ajudar aqueles que não podem se ajudar ou para reconstruir a infraestrutura danificada de Zaun.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/zac/')
        ativacaoBotao()
    } else if (nomeDado == 'ZED') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt402d6da485218720/5db0601de9effa6ba5295fc5/RiotX_ChampionList_zed.jpg?quality=90&width=250')
        champNome.innerHTML = 'Zed, o Mestre das Sombras'
        champBio.innerHTML = 'Absolutamente impiedoso e implacável, Zed é o líder da Ordem das Sombras; uma organização criada com a intenção de militarizar as tradições marciais e mágicas de Ionia para expulsar os invasores noxianos. Durante a guerra, o desespero o levou a libertar a forma secreta das sombras, uma magia espiritual malévola tão perigosa e manipuladora quanto poderosa. Zed dominou todas essas técnicas proibidas para destruir qualquer coisa que considerasse uma ameaça a sua nação, ou a sua nova ordem.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/zed/')
        ativacaoBotao()
    } else if (nomeDado == 'ZIGGS') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0f8c12d54d8ecd28/5db0602289fb926b491ed835/RiotX_ChampionList_ziggs.jpg?quality=90&width=250')
        champNome.innerHTML = 'Ziggs, o Especialista em Hexplosivos'
        champBio.innerHTML = 'O yordle Ziggs, amante de grandes bombas e pavios curtos, é uma força explosiva da natureza. Já entediado com sua vida previsível como assistente de um inventor de Piltover, ele fez amizade com uma bombardeira louca de cabelo azul chamada Jinx. Depois de uma noite louca na cidade com sua nova amiga, Ziggs aceitou seu conselho e se mudou para Zaun, onde ele agora explora suas fascinações com mais liberdade, aterrorizando tanto os barões químicos quanto os cidadãos comuns na sua aventura sem fim por explodir coisas.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/ziggs/')
        ativacaoBotao()
    } else if (nomeDado == 'ZILEAN') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta32de59397f53325/5db060222dc72966da746720/RiotX_ChampionList_zilean.jpg?quality=90&width=250')
        champNome.innerHTML = 'Zilean, o Guardião do Tempo'
        champBio.innerHTML = 'Outrora um poderoso mago icathiano, Zilean se obcecou com a passagem do tempo depois de testemunhar a destruição de sua terra natal pelo Vazio. Sem conseguir gastar um minuto que fosse para lamentar a perda catastrófica, ele invocou uma antiga magia temporal para adivinhar todos os finais possíveis. Tendo se tornado essencialmente imortal com isso, Zilean agora caminha entre passado, presente e futuro, curvando e distorcendo o fluxo do tempo a sua volta, sempre procurando por aquele momento fugaz que vai fazer o relógio voltar e desfazer a destruição de Icathia.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/zilean/')
        ativacaoBotao()
    } else if (nomeDado == 'ZOE') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd18587f31803441d/5db060226e8b0c6d038c5cc6/RiotX_ChampionList_zoe.jpg?quality=90&width=250')
        champNome.innerHTML = 'Zoe, o Aspecto do Crepúsculo'
        champBio.innerHTML = 'Como a personificação da travessura, imaginação e mudança, Zoe atua como a mensageira cósmica de Targon, anunciando a chegada de grandes eventos que redefinem mundos. Sua mera presença altera a matemática arcana que governa as realidades, às vezes causando cataclismas não intencionais. Talvez isso explique a forma despretensiosa e jovial com a qual Zoe encara seu dever e que permite que ela tenha tempo de sobra para pregar peças nos mortais, fazer brincadeirinhas ou dar um jeitinho de se divertir de alguma forma. Um encontro com Zoe pode ser agradável e revigorante, mas é sempre mais do que parece e geralmente extremamente perigoso.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/zoe/')
        ativacaoBotao()
    } else if (nomeDado == 'ZYRA') {
        champImg.setAttribute('src', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9bc3497cdd04f6d5/5db060229481396d6bdd01c4/RiotX_ChampionList_zyra.jpg?quality=90&width=250')
        champNome.innerHTML = 'Zyra, a Ascensão dos Espinhos'
        champBio.innerHTML = 'Nascida em uma antiga catástrofe mágica, Zyra é a fúria da natureza em forma física e uma sedutora criatura híbrida entre planta e humana, que faz surgir a vida a cada passo que dá. Ela vê os muitos mortais de Valoran como nada além de presas para suas crias semeadas e não sente nada ao destroçá-los em um turbilhão de farpas mortais. Apesar de seu real propósito ainda não ter sido descoberto, Zyra vaga pelo mundo, satisfazendo seus desejos primais de colonizar e estrangular toda e qualquer outra vida estranha que encontra.'
        linkPag.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/champions/zyra/')
        ativacaoBotao()
    } else if (nomeDado == '') {
        champInfo.style.display = 'none'
        logo.style.display = 'none'
        champNaoEncontrado.style.display = 'flex'
    } else {
        champInfo.style.display = 'none'
        logo.style.display = 'none'
        champNaoEncontrado.style.display = 'flex'
    }
}


function ativacaoBotao() {
    champInfo.style.display = 'flex'
    logo.style.display = 'none'
    champNaoEncontrado.style.display = 'none'
}
