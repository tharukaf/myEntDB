import { useParams } from 'react-router-dom'

export default function VaultViewer() {
  const { media } = useParams()

  return (
    <>
      <h2>Vault Viewer {media ? media : 'movies'}</h2>
    </>
  )
}
