import { Octokit } from 'octokit'
import { GenerateStaticParams } from '@/app/components/utils';
import ArchiveCardDetail from '@/app/components/ArchiveCardDetail';


export default function ArchiveDetailPage({params}) {
  console.log(params)
  return (
    <ArchiveCardDetail card = {params}/>
  )
}
