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
    } else if (nomeDado == '') {
        champImg.setAttribute('src', '')
        champNome.innerHTML = ''
        champBio.innerHTML = ''
        linkPag.setAttribute('href', '')
        ativacaoBotao()
    } 
    
    // else if (nomeDado == '') {
    //     champInfo.style.display = 'none'
    //     logo.style.display = 'none'
    //     champNaoEncontrado.style.display = 'flex'
    // } else {
    //     champInfo.style.display = 'none'
    //     logo.style.display = 'none'
    //     champNaoEncontrado.style.display = 'flex'
    // }
}


function ativacaoBotao() {
    champInfo.style.display = 'flex'
    logo.style.display = 'none'
    champNaoEncontrado.style.display = 'none'
}
