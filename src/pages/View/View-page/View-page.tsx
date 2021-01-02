import React, { useEffect, useState} from 'react'


import './View-page.scss'
import DocAngular from 'components/DocAngular/DocAngular'
import DocReact from 'components/DocReact/DocReact'

const ViewPage = (props: any) => {
  const SearchParams: URLSearchParams = new URLSearchParams(props.location.search)
  const [npm, setNpm] = useState<string | null>()
  const [tagComponent, setTagComponent] = useState<string | null>()
  const [framework, setFramework] = useState<string | null>()

  useEffect(() => {
    setValues()
  })


  const setValues = () => {
    if(SearchParams.has('npm')) {
      setNpm(SearchParams.get('npm'));
    }
    if(SearchParams.has('tag')) {
      const tag = SearchParams.get('tag')
      const tagDecode = tag ? decodeURIComponent(tag) : ''
      setTagComponent(tagDecode);
    }
    if(SearchParams.has('framework')) {
      const framework = SearchParams.get('framework')
      setFramework(framework);
    }
  }
  return (
    <div className="ViewPage">
      {/* <DocReact tagComponent={tagComponent} npm={npm} /> */}
      {framework === 'react' && <DocReact tagComponent={tagComponent} npm={npm} />}
      {framework === 'angular' && <DocAngular tagComponent={tagComponent} npm={npm} />}
      {framework === 'vue' && <DocAngular tagComponent={tagComponent} npm={npm} />}
      <hr/>
      <p> Você também pode olhar na documentação do Stenciljs sobre <a href={`https://stenciljs.com/docs/${framework}`} target="_blank" rel="noreferrer" title="link">documentação {framework}</a></p>
    </div>
  )
}

export default ViewPage
