import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import AddEmployee from './Pages/AddEmployee/AddEmployee';
import AttendenceApproval from './Pages/AttendenceApprovals/AttendenceApproval/AttendenceApproval';
import AttendenceApprovals from './Pages/AttendenceApprovals/AttendenceApprovals';
import AttendenceHistory from './Pages/AttendenceApprovals/AttendenceHistory/AttendenceHistory';
import AttendenceCorrection from './Pages/AttendenceCorrection/AttendenceCorrection';
import EmployeeProfile from './Pages/EmployeeProfile/EmployeeProfile';
import AddExpense from './Pages/ExpenseApprovals/AddExpense/AddExpense';
import ExpenseApprovals from './Pages/ExpenseApprovals/ExpenseApprovals';
import ExpenseDetails from './Pages/ExpenseApprovals/ExpenseDetails/ExpenseDetails';
import EmployeeDetails from './Pages/ExployeeDetails/EmployeeDetails';
import FineDetails from './Pages/ExtraPages/FineDetails/FineDetails';
import TotalCommission from './Pages/ExtraPages/TotalCommission/TotalCommission';
import FineApprovals from './Pages/FineManagement/FineApprovals/FineApprovals';
import FineManagement from './Pages/FineManagement/FineManagement';
import TimingApprovals from './Pages/TimingApprovals/TimingApprovals';
import TimingApprove from './Pages/TimingApprovals/TimingApprove/TimingApprove';
import Layout from './UI/Layout/Layout';
import ExpenseApproval from './Pages/ExpenseApprovals/ExpenseApproval/ExpenseApproval';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import AllAttendence from "./Pages/AllAttendence/AllAttendence";
import AddFine from './Pages/FineManagement/AddFine/AddFine'
// We have to diffrentiate between Login page and other Pages, so we are using useLocation
import FineDetail from './Pages/FineManagement/FineApprovals/FineDetails';

import AllPresent from './Pages/AllAttendence/AllPresent';
import AllAbsent from './Pages/AllAttendence/AllAbsent';
import AllOnLeave from './Pages/AllAttendence/AllOnLeave';
import AllOut from './Pages/AllAttendence/AllOut';
import PendingApprovals from './Pages/ExpenseApprovals/PendingApprovals';
import ApprovedExpenses from './Pages/ExpenseApprovals/ApprovedExpenses';
import TotalExpense from './Pages/ExpenseApprovals/TotalExpense';
import PermanentEmployee from './Pages/ExployeeDetails/PermanentEmployee';
import TrialEmployee from './Pages/ExployeeDetails/TrialEmployee';

import TotalFinesApproved from './Pages/FineManagement/TotalFinesApproved';
import TotalFinesToday from './Pages/FineManagement/TotalFinesToday';
import UploadAttendance from './Pages/UploadAttendance/UploadAttendance';
const App = () => {
  const urlPath = useLocation()
  const logPath = urlPath.pathname.includes('/hr_login');
  return (
    <React.Fragment>
      {logPath === true ?
        <Routes>
          <Route exact path='/hr_login' element={<AdminLogin />} />
        </Routes >
        :
        <Layout>
          <main className='main_container'>
            <Routes>
              <Route exact path="/" element={<AttendenceApprovals />} />
              <Route exact path='/all_attendence' element={<AllAttendence />} />
              <Route exact path='/attendence_history/:datetime/:id' element={<AttendenceHistory />} />
              <Route exact path="/all_attendence/present/" element={<AllPresent/>}></Route>
              <Route exact path="/all_attendence/absent/" element={<AllAbsent/>}></Route>
              <Route exact path="/all_attendence/on-leave/" element={<AllOnLeave/>}></Route>
              <Route exact path="/all_attendence/total-outs/" element={<AllOut/>}></Route>

              <Route exact path='/attendence_approval/:attendance_id/:employee_id' element={<AttendenceApproval />} />
              <Route exact path='/add_fine' element={<AddFine />} />
              <Route exact path="/attendence_corrections" element={<AttendenceCorrection />} />
              <Route exact path="/expense_approvals" element={<ExpenseApprovals />} />
               <Route exact path="/expense_approvals/pending_approvals" element={<PendingApprovals />} />
              <Route exact path="/expense_approvals/expense_approved" element={<ApprovedExpenses />} />
              <Route exact path="/expense_approvals/total_expense" element={<TotalExpense />} />
              <Route exact path="/expense_approval/:id/:employee_id" element={<ExpenseApproval />} />
              <Route exact path="/expense_details/:id/:employee_id" element={<ExpenseDetails />} />
              <Route exact path="/add_expense" element={<AddExpense />} />
              <Route exact path="/employee_details" element={<EmployeeDetails />} />
              <Route exact path="//employee_details/permanent_employee" element={<PermanentEmployee />} />
              <Route exact path="/employee_details/trial_employee" element={<TrialEmployee />} />
              
              <Route exact path="/add_employee" element={<AddEmployee />} />
              
              <Route exact path="/edit_employee/:id" element={<AddEmployee />} />
              <Route exact path="/employee_profile/:id" element={<EmployeeProfile />} />
               <Route exact path="/fine_management/total-fines" element={<TotalFinesToday />} />
              <Route exact path="/fine_management/fines-approved" element={<TotalFinesApproved />} />
              
              <Route exact path="/fine_management" element={<FineManagement />} />
              <Route exact path="/fine_approvals/:id/:employee_id" element={<FineApprovals />} />
              <Route exact path="/fine_details/:id/:employee_id" element={<FineDetail />} />
              <Route exact path="/timing_approvals" element={<TimingApprovals />} />
              <Route exact path="/timing_approve/:attendance_id/:employee_id" element={<TimingApprove />} />
              <Route exact path="/fine_details/:id/:month/:year" element={<FineDetails />} />
              <Route exact path="upload-attendance" element={<UploadAttendance />} />
            </Routes>
          </main>
        </Layout>
      }
    </React.Fragment>
  )
}
export default App