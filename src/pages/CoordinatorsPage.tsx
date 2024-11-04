import { Link } from 'react-router-dom'
import { AddNewBtn } from '../components/AddNewBtn/AddNewBtn'
import { TitledLayer } from '../layout/TitledLayer'
import { CoordinatorsTable } from '../components/CoordinatorsTable/CoordinatorsTable'

export default function CoordinatorsPage() {
	return (
        <TitledLayer editTitle>
		<div className="w-full px-2">
			<Link to="/panel/new-coordinators" className="block max-w-[190px] lg:max-w-[232px] lg:ml-6">
				<AddNewBtn>Dodaj kordynatora</AddNewBtn>
			</Link>

			<CoordinatorsTable />
		</div>
        </TitledLayer>
	)
}
