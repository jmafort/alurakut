import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props){
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}}></img>
    </Box>
  );
}

export default function Home() {
  const githubUser = 'jmafort';
  const favorites = [
    'juunegreiros',
    'omariosolto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];
  
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <ProfileRelationsBoxWrapper>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet/>
          </ProfileRelationsBoxWrapper>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({favorites.length})
            </h2>

            <ul>
              {favorites.map((favorite) => {
                return (
                  <li>
                    <a href={`/users/${favorite} key={favortie}`}>
                      <img src={`https://github.com/${favorite}.png`}/>
                      <span>{favorite}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
