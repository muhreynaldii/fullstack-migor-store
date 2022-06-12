import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Rw from "./pages/Rw/Rw";
import Warga from "./pages/Warga/Warga";
import Staff from "./pages/Staff/Staff";
import DataStaff from "./pages/DataStaff/DataStaff";
import DashboardStaff from "./pages/DashboardStaff/DashboardStaff";
import KepalaDinper from "./pages/KepalaDinper/KepalaDinper";
import Admin from "./pages/Admin/Admin";
import TambahPerioda from "./pages/TambahPerioda/TambahPerioda";
import TambahUser from "./pages/TambahUser/TambahUser";
import EditPerioda from "./pages/EditPerioda/EditPerioda";
import EditUser from "./pages/EditUser/EditUser";
import DashboardKepalaDinper from "./pages/DashboardKepalaDinper/DashboardKepalaDinper";
import DataKepalaDinper from "./pages/DataKepalaDinper/DataKepalaDinper";
import DashboardRw from "./pages/DashboardRw/DashboardRw";
import RwPerioda from "./pages/RwPerioda/RwPerioda";
import RwTransaksi from "./pages/RwTransaksi/RwTransaksi";
import Rt from "./pages/Rt/Rt";
import RtPerioda from "./pages/RtPerioda/RtPerioda";
import DashboardRt from "./pages/DashboardRt/DashboardRt";
import NotFound from "./pages/NotFound/NotFound";
import TambahWarga from "./pages/TambahWarga/TambahWarga";
import TambahRt from "./pages/TambahRt/TambahRt";
import TambahDomisili from "./pages/TambahDomisili/TambahDomisili";
import UploadBukti from "./pages/UploadBukti/UploadBukti";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="tambahperioda" element={<TambahPerioda />} />
          <Route path="tambahuser" element={<TambahUser />} />
          <Route path="editperioda/:id" element={<EditPerioda />} />
          <Route path="edituser/:id" element={<EditUser />} />
          <Route path="tambahdomisili" element={<TambahDomisili />} />
        </Route>
        <Route path="/rw" element={<Rw />}>
          <Route index element={<DashboardRw />} />
          <Route path="perioda" element={<RwPerioda />} />
          <Route path="transaksi" element={<RwTransaksi />} />
          <Route path="tambahrt" element={<TambahRt />} />
          <Route path="uploadbukti" element={<UploadBukti />} />
        </Route>
        <Route path="/rt" element={<Rt />}>
          <Route index element={<RtPerioda />} />
          <Route path="transaksi" element={<DashboardRt />} />
          <Route path="tambahwarga" element={<TambahWarga />} />
        </Route>
        <Route path="/warga" element={<Warga />} />
        <Route path="kepaladinper" element={<KepalaDinper />}>
          <Route index element={<DashboardKepalaDinper />} />
          <Route path="data" element={<DataKepalaDinper />} />
        </Route>
        <Route path="/staff" element={<Staff />}>
          <Route index element={<DashboardStaff />} />
          <Route path="data" element={<DataStaff />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
