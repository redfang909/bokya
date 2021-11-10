import * as React from 'react'
import {
	join,
	map,
} from 'lodash'
import {
	Grid,
} from '@material-ui/core'
import LottoNumbers from 'src/app/models/lottoNumbers'

interface Props {
	resultNumbers: LottoNumbers[]
}

const ResultComponent = ({resultNumbers}: Props) => {

  return (
    <Grid container spacing={3}>
			{
				map(resultNumbers, ({lottoData, jackPotNumber}: LottoNumbers) => (
					<Grid item sm key={lottoData.id}>					
						<div className="result">
							<h1>{lottoData.name}</h1>
							{join(jackPotNumber, ' - ')}
						</div>
					</Grid>	
				))
			}
		</Grid>
  )
}

export default ResultComponent