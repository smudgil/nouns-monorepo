import { StandaloneNounCircular } from '../../components/StandaloneNoun';
import { BigNumber as EthersBN } from 'ethers';
import classes from './NounImageVoteTable.module.css';

interface NounImageVoteTableProps {
  nounIds: string[];
}
const NOUNS_PER_VOTE_CARD = 15;

const NounImageVoteTable: React.FC<NounImageVoteTableProps> = props => {
  const { nounIds } = props;
  const paddedNounIds = nounIds
    .concat(Array(NOUNS_PER_VOTE_CARD).fill('-1'))
    .slice(0, NOUNS_PER_VOTE_CARD)
    .map((nounId: string) => {
      if (nounId === '-1') {
        return <div className={classes.grayCircle} />;
      }
      return <StandaloneNounCircular nounId={EthersBN.from(nounId)} />;
    });

  return (
    <table style={{ marginTop: '.5rem' }}>
      <tr>
        <td>{paddedNounIds[0]}</td>
        <td>{paddedNounIds[1]}</td>
        <td>{paddedNounIds[2]}</td>
        <td>{paddedNounIds[3]}</td>
        <td>{paddedNounIds[4]}</td>
      </tr>
      <tr>
        <td>{paddedNounIds[5]}</td>
        <td>{paddedNounIds[6]}</td>
        <td>{paddedNounIds[7]}</td>
        <td>{paddedNounIds[8]}</td>
        <td>{paddedNounIds[9]}</td>
      </tr>
      <tr>
        <td>{paddedNounIds[10]}</td>
        <td>{paddedNounIds[11]}</td>
        <td>{paddedNounIds[12]}</td>
        <td>{paddedNounIds[13]}</td>
        <td>{paddedNounIds[14]}</td>
      </tr>
    </table>
  );
};

export default NounImageVoteTable;
