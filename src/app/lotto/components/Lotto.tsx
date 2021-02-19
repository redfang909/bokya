import * as React from 'react'
import {
	range,
	sample,
	pull,
	size,
	join,
	map,
	filter,
	includes,
	first,
	find,
} from 'lodash'
import {
	Button,
	CssBaseline,
	AppBar,
	Toolbar,
	Typography,
	FormControl,
	FormHelperText,
	MenuItem,
	Select,
} from '@material-ui/core'
import * as moment from 'moment'
import Lotto from 'src/app/models/lotto'
import LottoNumbers from 'src/app/models/lottoNumbers'
import Result from '../containers/Result'

const { useState, useEffect } = React

interface Props {
  getLottoOptions: () => Lotto[]
}

const LottoComponent = ({ getLottoOptions }: Props) => {
	const [lottoNumbers, setLottoNumbers] = useState([])
	const [jackpotNumbers, setJackpotNumbers] = useState([])
	const [getTodaySchedule, setTodaySchedule] = useState([])
	const [lottoSelect, setLottoSelect] = useState<Number>(0)
	const [lottoResult, setLottoResult] = useState<LottoNumbers[]>([])

	useEffect(() => {
		initLottoTodayList()
	}, []);

	const initLottoTodayList = () => {
		const whatDay = moment().format("dddd")
		const lottoOptions = filter(getLottoOptions(), (option: Lotto) => {
			return includes(option.schedule, whatDay)
		})
		const lottoNumber = first(lottoOptions).lottoNumber
		setRangeValue(lottoNumber)
		setLottoSelect(lottoNumber)
		setTodaySchedule(lottoOptions)
	}

	const onPickNumbers = () => {
		const countNumbers = size(jackpotNumbers)
		if (countNumbers < 6) {
			pickRandomNumbers()
		}			
	}

	const pickRandomNumbers = () => {	
		const jack = sample(lottoNumbers)
		const newLottoNumbers = pull(lottoNumbers, jack)
		const newJackpotNumber = [...jackpotNumbers, jack]
		const countNumbers = size(newJackpotNumber)
		setLottoNumbers(newLottoNumbers)
		setJackpotNumbers(newJackpotNumber)

		if (countNumbers === 6) {
			const newLottoScheduleData = filter(lottoResult, (sched: LottoNumbers) => {
				return sched.lottoData.lottoNumber !== lottoSelect
			})
		
			const selectedLottoSchedule = find(getTodaySchedule, (data: Lotto) => {
				return data.lottoNumber === lottoSelect
			})
			console.log(selectedLottoSchedule)
			
			const scheduleData = [...newLottoScheduleData, {
				lottoData: selectedLottoSchedule,
				jackPotNumber: newJackpotNumber
			}]			

			setLottoResult(scheduleData)
		}
	}

	const onResetNumbers = () => {
		setRangeValue(lottoSelect);	
		setJackpotNumbers([])
	}

	const handleChange = (item) => {
		const { target: { value } } = item
		setLottoSelect(value)
		setJackpotNumbers([])

		setRangeValue(value);	
	}
	
	const setRangeValue = (value) => {
		const lottoSetNumbers = range(value + 1);
		lottoSetNumbers.shift()
		setLottoNumbers(lottoSetNumbers)
	}
	
  return (
    <div>
			<CssBaseline/>
			<AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Play Lotto
          </Typography>
					<div className="lotto-label">
					<FormControl className="lotto-schedule">
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							value={lottoSelect}
							defaultValue="0"
							onChange={handleChange}
						>						
							{
								map(getTodaySchedule, ({
									id, lottoNumber, name
								}: Lotto) => (
									<MenuItem key={id} value={lottoNumber}>{name}</MenuItem>
								))
							}
						</Select>
						<FormHelperText>Lotto Schedule For Today</FormHelperText>
					</FormControl>
					</div>
        </Toolbar>
      </AppBar>
			<div className="jackpot-numbers">
				{join(jackpotNumbers, ' - ')}
			</div>
			<div className="lotto-buttons">
				<Button onClick={onPickNumbers} variant="contained" color="primary">
				Pick Numbers ({6 - size(jackpotNumbers)})
				</Button>
				<Button onClick={onResetNumbers} variant="contained" color="secondary">
					Reset Numbers
				</Button>
			</div>	
			<Result resultNumbers={lottoResult}/>		
    </div>
  )
}

export default LottoComponent