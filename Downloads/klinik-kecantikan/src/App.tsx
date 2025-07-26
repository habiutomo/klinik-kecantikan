import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  ShoppingBag, 
  Building2, 
  Heart, 
  Scissors, 
  UserCheck, 
  BarChart3,
  Bell,
  Search,
  Menu,
  X,
  Plus,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  Camera,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Filter,
  Calendar as CalendarIcon,
  CreditCard,
  Gift,
  Award,
  Target,
  Activity,
  FileText,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Video,
  Send,
  CheckCircle,
  AlertCircle,
  XCircle,
  Info
} from 'lucide-react';

// Mock data
const mockStats = {
  dailyVisits: 45,
  weeklyRevenue: 125000000,
  monthlyPatients: 234,
  treatmentCount: 89,
  totalMembers: 1250,
  activePromotions: 8,
  pendingBookings: 23,
  lowStockItems: 5
};

const mockAppointments = [
  { id: 1, patient: 'Sarah Johnson', treatment: 'Botox Treatment', time: '09:00', doctor: 'Dr. Maya', status: 'confirmed', branch: 'Central Jakarta' },
  { id: 2, patient: 'Lisa Chen', treatment: 'Facial Premium', time: '10:30', doctor: 'Dr. Sari', status: 'in-progress', branch: 'South Jakarta' },
  { id: 3, patient: 'Amanda Wong', treatment: 'Laser Hair Removal', time: '11:00', doctor: 'Dr. Maya', status: 'waiting', branch: 'Central Jakarta' },
  { id: 4, patient: 'Jennifer Lee', treatment: 'Filler Treatment', time: '14:00', doctor: 'Dr. Rina', status: 'confirmed', branch: 'West Jakarta' }
];

const mockPatients = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    phone: '+62 812-3456-7890', 
    email: 'sarah@email.com', 
    birthDate: '1990-05-15',
    lastTreatment: 'Botox Treatment', 
    lastVisit: '2024-01-15', 
    totalSpending: 12500000, 
    status: 'Active',
    membershipLevel: 'Gold',
    loyaltyPoints: 2500,
    treatments: [
      { date: '2024-01-15', treatment: 'Botox Treatment', doctor: 'Dr. Maya', cost: 3500000 },
      { date: '2024-01-01', treatment: 'Facial Premium', doctor: 'Dr. Sari', cost: 1200000 },
      { date: '2023-12-15', treatment: 'Chemical Peeling', doctor: 'Dr. Maya', cost: 2800000 }
    ],
    beforeAfterPhotos: [
      { id: 1, treatment: 'Botox Treatment', beforeUrl: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=200', afterUrl: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=200', date: '2024-01-15' }
    ]
  },
  { 
    id: 2, 
    name: 'Lisa Chen', 
    phone: '+62 813-4567-8901', 
    email: 'lisa@email.com', 
    birthDate: '1985-08-22',
    lastTreatment: 'Facial Premium', 
    lastVisit: '2024-01-14', 
    totalSpending: 8750000, 
    status: 'Active',
    membershipLevel: 'Silver',
    loyaltyPoints: 1750,
    treatments: [
      { date: '2024-01-14', treatment: 'Facial Premium', doctor: 'Dr. Sari', cost: 1200000 },
      { date: '2023-12-28', treatment: 'Microdermabrasion', doctor: 'Dr. Rina', cost: 1500000 }
    ],
    beforeAfterPhotos: []
  }
];

const mockProducts = [
  { 
    id: 1, 
    name: 'Vitamin C Serum', 
    price: 450000, 
    stock: 23, 
    category: 'Serum',
    description: 'Brightening serum with 20% Vitamin C',
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.8,
    reviews: 156,
    sold: 89
  },
  { 
    id: 2, 
    name: 'Moisturizing Cream', 
    price: 320000, 
    stock: 15, 
    category: 'Moisturizer',
    description: 'Hydrating cream for all skin types',
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.6,
    reviews: 203,
    sold: 145
  },
  { 
    id: 3, 
    name: 'Anti-Aging Serum', 
    price: 650000, 
    stock: 8, 
    category: 'Serum',
    description: 'Advanced anti-aging formula with retinol',
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.9,
    reviews: 87,
    sold: 67
  }
];

const mockTreatments = [
  {
    id: 1,
    name: 'Botox Treatment',
    category: 'Injectable',
    price: 3500000,
    duration: 60,
    description: 'Anti-aging botox injection for wrinkle reduction',
    sop: 'Pre-treatment consultation, skin preparation, injection procedure, post-care instructions',
    doctors: ['Dr. Maya', 'Dr. Rina'],
    popularity: 95
  },
  {
    id: 2,
    name: 'Facial Premium',
    category: 'Facial',
    price: 1200000,
    duration: 90,
    description: 'Deep cleansing facial with premium skincare products',
    sop: 'Skin analysis, cleansing, extraction, mask application, moisturizing',
    doctors: ['Dr. Sari', 'Dr. Maya'],
    popularity: 88
  },
  {
    id: 3,
    name: 'Laser Hair Removal',
    category: 'Laser',
    price: 2800000,
    duration: 45,
    description: 'Permanent hair removal using advanced laser technology',
    sop: 'Skin preparation, laser calibration, treatment procedure, cooling gel application',
    doctors: ['Dr. Maya', 'Dr. Rina'],
    popularity: 76
  }
];

const mockBranches = [
  { 
    id: 1, 
    name: 'Central Jakarta', 
    address: 'Jl. Sudirman No. 123, Jakarta Pusat',
    phone: '+62 21-1234-5678',
    revenue: 45000000, 
    patients: 89, 
    target: 50000000,
    doctors: ['Dr. Maya', 'Dr. Sari'],
    operatingHours: '08:00 - 20:00',
    manager: 'Siti Nurhaliza'
  },
  { 
    id: 2, 
    name: 'South Jakarta', 
    address: 'Jl. Kemang Raya No. 456, Jakarta Selatan',
    phone: '+62 21-2345-6789',
    revenue: 38000000, 
    patients: 67, 
    target: 40000000,
    doctors: ['Dr. Rina', 'Dr. Sari'],
    operatingHours: '09:00 - 21:00',
    manager: 'Dewi Sartika'
  },
  { 
    id: 3, 
    name: 'West Jakarta', 
    address: 'Jl. Puri Indah No. 789, Jakarta Barat',
    phone: '+62 21-3456-7890',
    revenue: 42000000, 
    patients: 78, 
    target: 45000000,
    doctors: ['Dr. Maya', 'Dr. Rina'],
    operatingHours: '08:30 - 19:30',
    manager: 'Kartini Sari'
  }
];

const mockStaff = [
  {
    id: 1,
    name: 'Dr. Maya Sari',
    role: 'Senior Doctor',
    specialization: 'Aesthetic Medicine',
    branch: 'Central Jakarta',
    phone: '+62 812-1111-1111',
    email: 'maya@beautyclinic.com',
    schedule: 'Mon-Fri 09:00-17:00',
    performance: 95,
    patients: 156,
    revenue: 45000000
  },
  {
    id: 2,
    name: 'Dr. Sari Indah',
    role: 'Doctor',
    specialization: 'Facial Treatment',
    branch: 'South Jakarta',
    phone: '+62 812-2222-2222',
    email: 'sari@beautyclinic.com',
    schedule: 'Mon-Sat 10:00-18:00',
    performance: 88,
    patients: 134,
    revenue: 38000000
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'patients', label: 'Manajemen Pasien', icon: Users },
    { id: 'booking', label: 'Booking Online', icon: Calendar },
    { id: 'products', label: 'E-Commerce', icon: ShoppingBag },
    { id: 'branches', label: 'Manajemen Cabang', icon: Building2 },
    { id: 'crm', label: 'CRM & Loyalty', icon: Heart },
    { id: 'treatments', label: 'Layanan & Treatment', icon: Scissors },
    { id: 'staff', label: 'Manajemen SDM', icon: UserCheck },
    { id: 'reports', label: 'Laporan & Analitik', icon: BarChart3 }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const StatCard = ({ title, value, icon: Icon, change, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <p className={`text-sm mt-1 flex items-center ${change >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {change >= 0 ? '+' : ''}{change}%
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const PatientModal = ({ patient, onClose }) => {
    if (!patient) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Detail Pasien</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Patient Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{patient.name}</h3>
                    <p className="text-gray-600">{patient.membershipLevel} Member</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">{patient.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">{patient.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">{patient.birthDate}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm text-teal-600 font-medium">Total Spending</p>
                    <p className="text-xl font-bold text-teal-900">{formatCurrency(patient.totalSpending)}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-600 font-medium">Loyalty Points</p>
                    <p className="text-xl font-bold text-purple-900">{patient.loyaltyPoints}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment History */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Riwayat Treatment</h4>
              <div className="space-y-3">
                {patient.treatments.map((treatment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h5 className="font-semibold text-gray-900">{treatment.treatment}</h5>
                      <p className="text-sm text-gray-600">{treatment.doctor} • {treatment.date}</p>
                    </div>
                    <span className="font-bold text-teal-600">{formatCurrency(treatment.cost)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After Photos */}
            {patient.beforeAfterPhotos.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Foto Before/After</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {patient.beforeAfterPhotos.map((photo) => (
                    <div key={photo.id} className="space-y-2">
                      <h5 className="font-medium text-gray-900">{photo.treatment}</h5>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Before</p>
                          <img src={photo.beforeUrl} alt="Before" className="w-full h-32 object-cover rounded-lg" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">After</p>
                          <img src={photo.afterUrl} alt="After" className="w-full h-32 object-cover rounded-lg" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const BookingModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Booking Baru</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nama Pasien</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
              <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cabang</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option>Central Jakarta</option>
                <option>South Jakarta</option>
                <option>West Jakarta</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Treatment</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option>Botox Treatment</option>
                <option>Facial Premium</option>
                <option>Laser Hair Removal</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Waktu</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>14:00</option>
                <option>15:00</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dokter</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option>Dr. Maya</option>
              <option>Dr. Sari</option>
              <option>Dr. Rina</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Catatan</label>
            <textarea rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Catatan tambahan..."></textarea>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button onClick={onClose} className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
              Batal
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
              Simpan Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
              <p className="text-gray-600">Selamat datang di sistem manajemen klinik kecantikan</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Kunjungan Hari Ini"
                value={mockStats.dailyVisits}
                icon={Users}
                change={12}
                color="bg-gradient-to-br from-blue-500 to-blue-600"
              />
              <StatCard
                title="Pendapatan Minggu Ini"
                value={formatCurrency(mockStats.weeklyRevenue)}
                icon={DollarSign}
                change={8}
                color="bg-gradient-to-br from-emerald-500 to-emerald-600"
              />
              <StatCard
                title="Total Pasien Bulan Ini"
                value={mockStats.monthlyPatients}
                icon={Heart}
                change={-3}
                color="bg-gradient-to-br from-pink-500 to-pink-600"
              />
              <StatCard
                title="Treatment Selesai"
                value={mockStats.treatmentCount}
                icon={Scissors}
                change={15}
                color="bg-gradient-to-br from-purple-500 to-purple-600"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Jadwal Hari Ini</h2>
                  <button 
                    onClick={() => setShowBookingModal(true)}
                    className="px-3 py-1 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700 transition-colors duration-200"
                  >
                    Tambah Booking
                  </button>
                </div>
                <div className="space-y-3">
                  {mockAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow duration-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {appointment.patient.split(' ').map((n) => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                          <p className="text-sm text-gray-600">{appointment.treatment}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{appointment.time}</p>
                        <p className="text-sm text-gray-600">{appointment.doctor}</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          appointment.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' :
                          appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Notifikasi Terbaru</h2>
                  <Bell className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Stok Vitamin C Serum menipis</p>
                      <p className="text-xs text-gray-600">Sisa 8 unit • 2 jam yang lalu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Pembayaran treatment berhasil</p>
                      <p className="text-xs text-gray-600">Sarah Johnson • 3 jam yang lalu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Reminder follow-up pasien</p>
                      <p className="text-xs text-gray-600">Lisa Chen • 5 jam yang lalu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Booking online baru</p>
                      <p className="text-xs text-gray-600">Amanda Wong • 1 jam yang lalu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-teal-100">Total Members</p>
                    <p className="text-2xl font-bold">{mockStats.totalMembers}</p>
                  </div>
                  <Award className="w-8 h-8 text-teal-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Active Promotions</p>
                    <p className="text-2xl font-bold">{mockStats.activePromotions}</p>
                  </div>
                  <Gift className="w-8 h-8 text-purple-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">Pending Bookings</p>
                    <p className="text-2xl font-bold">{mockStats.pendingBookings}</p>
                  </div>
                  <Clock className="w-8 h-8 text-orange-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100">Low Stock Items</p>
                    <p className="text-2xl font-bold">{mockStats.lowStockItems}</p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-red-200" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'patients':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manajemen Pasien</h1>
                <p className="text-gray-600">Kelola data pasien dan riwayat perawatan</p>
              </div>
              <button 
                onClick={() => setShowPatientModal(true)}
                className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
              >
                <Plus className="w-4 h-4 mr-2" />
                Tambah Pasien
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Cari nama pasien, nomor telepon, atau email..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Semua Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Semua Membership</option>
                    <option>Gold</option>
                    <option>Silver</option>
                    <option>Bronze</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pasien</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kontak</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Membership</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment Terakhir</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spending</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockPatients.map((patient) => (
                      <tr key={patient.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {patient.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                              <div className="text-sm text-gray-500">{patient.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{patient.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            patient.membershipLevel === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                            patient.membershipLevel === 'Silver' ? 'bg-gray-100 text-gray-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {patient.membershipLevel}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{patient.lastTreatment}</div>
                          <div className="text-sm text-gray-500">{patient.lastVisit}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {formatCurrency(patient.totalSpending)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {patient.loyaltyPoints}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            patient.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {patient.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button 
                            onClick={() => {
                              setSelectedPatient(patient);
                              setShowPatientModal(true);
                            }}
                            className="text-teal-600 hover:text-teal-900"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'booking':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Booking Online</h1>
                <p className="text-gray-600">Kelola jadwal dan booking pasien</p>
              </div>
              <button 
                onClick={() => setShowBookingModal(true)}
                className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
              >
                <Plus className="w-4 h-4 mr-2" />
                Booking Baru
              </button>
            </div>

            {/* Calendar View */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Jadwal Booking</h2>
                <div className="flex items-center space-x-4">
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Semua Cabang</option>
                    <option>Central Jakarta</option>
                    <option>South Jakarta</option>
                    <option>West Jakarta</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Time Slots */}
                <div className="lg:col-span-2">
                  <h3 className="font-semibold text-gray-900 mb-4">Slot Waktu Tersedia</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map((time) => (
                      <button
                        key={time}
                        className={`p-3 text-center rounded-lg border transition-colors duration-200 ${
                          mockAppointments.some(apt => apt.time === time) 
                            ? 'bg-red-50 border-red-200 text-red-600 cursor-not-allowed'
                            : 'bg-emerald-50 border-emerald-200 text-emerald-600 hover:bg-emerald-100'
                        }`}
                        disabled={mockAppointments.some(apt => apt.time === time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Today's Appointments */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Booking Hari Ini</h3>
                  <div className="space-y-3">
                    {mockAppointments.map((appointment) => (
                      <div key={appointment.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{appointment.time}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            appointment.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' :
                            appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                        <p className="text-xs text-gray-600">{appointment.treatment}</p>
                        <p className="text-xs text-gray-600">{appointment.doctor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Booking Hari Ini</p>
                    <p className="text-2xl font-bold text-gray-900">{mockAppointments.length}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-teal-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Confirmed</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {mockAppointments.filter(apt => apt.status === 'confirmed').length}
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">In Progress</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {mockAppointments.filter(apt => apt.status === 'in-progress').length}
                    </p>
                  </div>
                  <Activity className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Waiting</p>
                    <p className="text-2xl font-bold text-yellow-600">
                      {mockAppointments.filter(apt => apt.status === 'waiting').length}
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'products':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">E-Commerce Produk</h1>
                <p className="text-gray-600">Kelola produk kecantikan dan stok inventory</p>
              </div>
              <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
                <Plus className="w-4 h-4 mr-2" />
                Tambah Produk
              </button>
            </div>

            {/* Product Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Produk</p>
                    <p className="text-2xl font-bold text-gray-900">{mockProducts.length}</p>
                  </div>
                  <ShoppingBag className="w-8 h-8 text-teal-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Low Stock</p>
                    <p className="text-2xl font-bold text-red-600">
                      {mockProducts.filter(p => p.stock < 15).length}
                    </p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Terjual</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {mockProducts.reduce((sum, p) => sum + p.sold, 0)}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenue Produk</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {formatCurrency(mockProducts.reduce((sum, p) => sum + (p.price * p.sold), 0))}
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-purple-500" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <p className="text-lg font-bold text-teal-600 mb-3">{formatCurrency(product.price)}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.stock > 20 ? 'bg-emerald-100 text-emerald-800' :
                        product.stock > 10 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        Stok: {product.stock}
                      </span>
                      <span className="text-sm text-gray-600">{product.sold} terjual</span>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700 transition-colors duration-200">
                        Edit
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Sales */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Penjualan Produk Terbaru</h2>
              <div className="space-y-3">
                {[
                  { product: 'Vitamin C Serum', customer: 'Sarah Johnson', amount: 450000, date: '2024-01-15 14:30', status: 'completed' },
                  { product: 'Anti-Aging Serum', customer: 'Lisa Chen', amount: 650000, date: '2024-01-15 13:15', status: 'processing' },
                  { product: 'Moisturizing Cream', customer: 'Amanda Wong', amount: 320000, date: '2024-01-15 11:45', status: 'completed' },
                  { product: 'Vitamin C Serum', customer: 'Jennifer Lee', amount: 450000, date: '2024-01-15 10:30', status: 'shipped' }
                ].map((sale, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{sale.product}</h4>
                        <p className="text-sm text-gray-600">{sale.customer} • {sale.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-emerald-600">{formatCurrency(sale.amount)}</span>
                      <div className="mt-1">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          sale.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                          sale.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {sale.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'branches':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manajemen Cabang</h1>
                <p className="text-gray-600">Monitor performa dan target setiap cabang klinik</p>
              </div>
              <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
                <Plus className="w-4 h-4 mr-2" />
                Tambah Cabang
              </button>
            </div>

            {/* Branch Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBranches.map((branch) => {
                const percentage = (branch.revenue / branch.target) * 100;
                return (
                  <div key={branch.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">{branch.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        percentage >= 90 ? 'bg-emerald-100 text-emerald-800' :
                        percentage >= 70 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {percentage.toFixed(0)}%
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{branch.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{branch.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{branch.operatingHours}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <UserCheck className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{branch.manager}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Revenue</span>
                          <span className="font-semibold">{formatCurrency(branch.revenue)}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Target: {formatCurrency(branch.target)}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-100">
                        <div>
                          <p className="text-xs text-gray-500">Total Pasien</p>
                          <p className="font-semibold text-gray-900">{branch.patients}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Dokter</p>
                          <p className="font-semibold text-gray-900">{branch.doctors.length}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <button className="flex-1 px-3 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700 transition-colors duration-200">
                        Detail
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors duration-200">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Performance Comparison */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Komparasi Performa Cabang</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cabang</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Achievement</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pasien</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg/Pasien</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dokter</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockBranches.map((branch) => {
                      const achievement = (branch.revenue / branch.target) * 100;
                      const avgPerPatient = branch.revenue / branch.patients;
                      return (
                        <tr key={branch.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 font-medium text-gray-900">{branch.name}</td>
                          <td className="px-4 py-4 text-gray-900">{formatCurrency(branch.revenue)}</td>
                          <td className="px-4 py-4 text-gray-600">{formatCurrency(branch.target)}</td>
                          <td className="px-4 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              achievement >= 90 ? 'bg-emerald-100 text-emerald-800' :
                              achievement >= 70 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {achievement.toFixed(1)}%
                            </span>
                          </td>
                          <td className="px-4 py-4 text-gray-900">{branch.patients}</td>
                          <td className="px-4 py-4 text-gray-900">{formatCurrency(avgPerPatient)}</td>
                          <td className="px-4 py-4 text-gray-900">{branch.doctors.join(', ')}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'crm':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CRM & Loyalty Program</h1>
                <p className="text-gray-600">Kelola hubungan pelanggan dan program loyalitas</p>
              </div>
              <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
                <Plus className="w-4 h-4 mr-2" />
                Campaign Baru
              </button>
            </div>

            {/* CRM Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-pink-100">Total Members</p>
                    <p className="text-2xl font-bold">1,250</p>
                  </div>
                  <Heart className="w-8 h-8 text-pink-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Active Campaigns</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                  <Send className="w-8 h-8 text-purple-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">Referrals</p>
                    <p className="text-2xl font-bold">156</p>
                  </div>
                  <Users className="w-8 h-8 text-orange-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100">Points Redeemed</p>
                    <p className="text-2xl font-bold">45,230</p>
                  </div>
                  <Gift className="w-8 h-8 text-emerald-200" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Membership Levels */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Membership Levels</h2>
                <div className="space-y-4">
                  {[
                    { level: 'Gold', members: 125, color: 'bg-yellow-500', benefits: 'Diskon 20%, Priority booking, Free consultation' },
                    { level: 'Silver', members: 456, color: 'bg-gray-400', benefits: 'Diskon 15%, Birthday promo, Points 2x' },
                    { level: 'Bronze', members: 669, color: 'bg-orange-500', benefits: 'Diskon 10%, Welcome bonus, Points 1x' }
                  ].map((membership) => (
                    <div key={membership.level} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full ${membership.color}`}></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{membership.level} Member</h4>
                          <p className="text-sm text-gray-600">{membership.benefits}</p>
                        </div>
                      </div>
                      <span className="font-bold text-gray-900">{membership.members}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Campaigns */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Campaign Terbaru</h2>
                <div className="space-y-4">
                  {[
                    { name: 'Birthday Special', type: 'Email', sent: 234, opened: 156, status: 'active' },
                    { name: 'New Year Promo', type: 'WhatsApp', sent: 1250, opened: 890, status: 'completed' },
                    { name: 'Treatment Reminder', type: 'SMS', sent: 89, opened: 67, status: 'active' }
                  ].map((campaign, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{campaign.name}</h4>
                        <p className="text-sm text-gray-600">{campaign.type} • {campaign.sent} sent • {campaign.opened} opened</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        campaign.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Loyalty Program */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Program Loyalitas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                  <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Points System</h3>
                  <p className="text-sm text-gray-600">Earn 1 point per Rp 1,000 spent</p>
                  <p className="text-2xl font-bold text-teal-600 mt-2">125,450</p>
                  <p className="text-xs text-gray-500">Total points distributed</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <Gift className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Rewards</h3>
                  <p className="text-sm text-gray-600">Redeem points for treatments</p>
                  <p className="text-2xl font-bold text-purple-600 mt-2">23</p>
                  <p className="text-xs text-gray-500">Active rewards</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                  <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Referrals</h3>
                  <p className="text-sm text-gray-600">Get bonus for each referral</p>
                  <p className="text-2xl font-bold text-pink-600 mt-2">156</p>
                  <p className="text-xs text-gray-500">Successful referrals</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'treatments':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Layanan & Treatment</h1>
                <p className="text-gray-600">Kelola daftar treatment dan layanan klinik</p>
              </div>
              <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
                <Plus className="w-4 h-4 mr-2" />
                Tambah Treatment
              </button>
            </div>

            {/* Treatment Categories */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { category: 'Injectable', count: 5, color: 'bg-blue-500', icon: Scissors },
                { category: 'Facial', count: 8, color: 'bg-pink-500', icon: Heart },
                { category: 'Laser', count: 6, color: 'bg-purple-500', icon: Activity },
                { category: 'Body Treatment', count: 4, color: 'bg-emerald-500', icon: Users }
              ].map((cat) => (
                <div key={cat.category} className={`${cat.color} p-6 rounded-xl text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80">{cat.category}</p>
                      <p className="text-2xl font-bold">{cat.count}</p>
                    </div>
                    <cat.icon className="w-8 h-8 text-white/60" />
                  </div>
                </div>
              ))}
            </div>

            {/* Treatment List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Daftar Treatment</h2>
                  <div className="flex items-center space-x-4">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                      <option>Semua Kategori</option>
                      <option>Injectable</option>
                      <option>Facial</option>
                      <option>Laser</option>
                    </select>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Cari treatment..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {mockTreatments.map((treatment) => (
                  <div key={treatment.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{treatment.name}</h3>
                          <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                            {treatment.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm text-emerald-600">{treatment.popularity}% popularity</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{treatment.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Harga:</span>
                            <span className="font-semibold text-gray-900 ml-2">{formatCurrency(treatment.price)}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Durasi:</span>
                            <span className="font-semibold text-gray-900 ml-2">{treatment.duration} menit</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Dokter:</span>
                            <span className="font-semibold text-gray-900 ml-2">{treatment.doctors.join(', ')}</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <span className="text-gray-500 text-sm">SOP:</span>
                          <p className="text-sm text-gray-600 mt-1">{treatment.sop}</p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 ml-6">
                        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700 transition-colors duration-200">
                          Edit
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors duration-200">
                          SOP Detail
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors duration-200">
                          <Video className="w-4 h-4 inline mr-1" />
                          Konsultasi
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Performance */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Performa Treatment</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Treatment</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Rating</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Popularity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockTreatments.map((treatment) => (
                      <tr key={treatment.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-medium text-gray-900">{treatment.name}</td>
                        <td className="px-4 py-4 text-gray-900">45</td>
                        <td className="px-4 py-4 text-gray-900">{formatCurrency(treatment.price * 45)}</td>
                        <td className="px-4 py-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-gray-900">4.8</span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-teal-600 h-2 rounded-full" 
                                style={{ width: `${treatment.popularity}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{treatment.popularity}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'staff':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manajemen SDM</h1>
                <p className="text-gray-600">Kelola staff, jadwal, dan performa karyawan</p>
              </div>
              <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
                <Plus className="w-4 h-4 mr-2" />
                Tambah Staff
              </button>
            </div>

            {/* Staff Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Staff</p>
                    <p className="text-2xl font-bold text-gray-900">24</p>
                  </div>
                  <Users className="w-8 h-8 text-teal-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Dokter</p>
                    <p className="text-2xl font-bold text-blue-600">8</p>
                  </div>
                  <UserCheck className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Terapis</p>
                    <p className="text-2xl font-bold text-purple-600">12</p>
                  </div>
                  <Heart className="w-8 h-8 text-purple-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Admin</p>
                    <p className="text-2xl font-bold text-emerald-600">4</p>
                  </div>
                  <Settings className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Staff List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Daftar Staff</h2>
                  <div className="flex items-center space-x-4">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                      <option>Semua Role</option>
                      <option>Doctor</option>
                      <option>Therapist</option>
                      <option>Admin</option>
                    </select>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                      <option>Semua Cabang</option>
                      <option>Central Jakarta</option>
                      <option>South Jakarta</option>
                      <option>West Jakarta</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {mockStaff.map((staff) => (
                  <div key={staff.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {staff.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{staff.name}</h3>
                          <p className="text-sm text-gray-600">{staff.role} • {staff.specialization}</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{staff.branch}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Phone className="w-4 h-4" />
                              <span>{staff.phone}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{staff.schedule}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="grid grid-cols-3 gap-4 mb-2">
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Performance</p>
                            <p className="font-semibold text-emerald-600">{staff.performance}%</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Patients</p>
                            <p className="font-semibold text-gray-900">{staff.patients}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Revenue</p>
                            <p className="font-semibold text-teal-600">{formatCurrency(staff.revenue)}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                            Detail
                          </button>
                          <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Management */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Jadwal Hari Ini</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {mockBranches.map((branch) => (
                  <div key={branch.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">{branch.name}</h3>
                    <div className="space-y-2">
                      {branch.doctors.map((doctor, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm font-medium text-gray-900">{doctor}</span>
                          <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                            Available
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Laporan & Analitik</h1>
                <p className="text-gray-600">Analisis performa bisnis dan laporan keuangan</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
                <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </button>
              </div>
            </div>

            {/* Report Filters */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Periode</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Hari Ini</option>
                    <option>Minggu Ini</option>
                    <option>Bulan Ini</option>
                    <option>Custom Range</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cabang</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Semua Cabang</option>
                    <option>Central Jakarta</option>
                    <option>South Jakarta</option>
                    <option>West Jakarta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Semua</option>
                    <option>Treatment</option>
                    <option>Produk</option>
                    <option>Membership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>PDF</option>
                    <option>Excel</option>
                    <option>CSV</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Revenue Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Breakdown</h2>
                <div className="space-y-4">
                  {[
                    { category: 'Treatment', amount: 85000000, percentage: 68, color: 'bg-teal-500' },
                    { category: 'Produk', amount: 25000000, percentage: 20, color: 'bg-purple-500' },
                    { category: 'Membership', amount: 15000000, percentage: 12, color: 'bg-pink-500' }
                  ].map((item) => (
                    <div key={item.category} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                        <span className="font-medium text-gray-900">{item.category}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{formatCurrency(item.amount)}</p>
                        <p className="text-sm text-gray-500">{item.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Treatments</h2>
                <div className="space-y-4">
                  {mockTreatments.map((treatment, index) => (
                    <div key={treatment.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="font-medium text-gray-900">{treatment.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{formatCurrency(treatment.price * 45)}</p>
                        <p className="text-sm text-gray-500">45 bookings</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Customer Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">New Customers</span>
                    <span className="font-semibold text-gray-900">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Returning Customers</span>
                    <span className="font-semibold text-gray-900">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer Lifetime Value</span>
                    <span className="font-semibold text-gray-900">{formatCurrency(8500000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Churn Rate</span>
                    <span className="font-semibold text-red-600">3.2%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Operational Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking Rate</span>
                    <span className="font-semibold text-emerald-600">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">No-Show Rate</span>
                    <span className="font-semibold text-yellow-600">6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Treatment Time</span>
                    <span className="font-semibold text-gray-900">75 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Staff Utilization</span>
                    <span className="font-semibold text-blue-600">87%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Financial Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Margin</span>
                    <span className="font-semibold text-emerald-600">72%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Operating Margin</span>
                    <span className="font-semibold text-blue-600">28%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI per Treatment</span>
                    <span className="font-semibold text-purple-600">340%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Break-even Point</span>
                    <span className="font-semibold text-gray-900">45 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Laporan Terbaru</h2>
              <div className="space-y-3">
                {[
                  { name: 'Monthly Revenue Report - January 2024', date: '2024-01-31', type: 'Financial', size: '2.4 MB' },
                  { name: 'Customer Satisfaction Survey', date: '2024-01-30', type: 'Customer', size: '1.8 MB' },
                  { name: 'Staff Performance Review', date: '2024-01-29', type: 'HR', size: '3.1 MB' },
                  { name: 'Inventory Stock Report', date: '2024-01-28', type: 'Inventory', size: '1.2 MB' }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <FileText className="w-8 h-8 text-teal-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{report.name}</h4>
                        <p className="text-sm text-gray-600">{report.type} • {report.date} • {report.size}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                        <Download className="w-4 h-4 inline mr-1" />
                        Download
                      </button>
                      <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">
                        <Eye className="w-4 h-4 inline mr-1" />
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Modul {menuItems.find(item => item.id === activeTab)?.label}</h2>
              <p className="text-gray-600 mb-6">Fitur ini sedang dalam pengembangan dan akan segera hadir.</p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
              >
                Kembali ke Dashboard
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">BeautyClinic</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">AD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Admin</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4 ml-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent w-64"
                />
              </div>
              
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">5</span>
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">AD</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Modals */}
      {showPatientModal && (
        <PatientModal 
          patient={selectedPatient} 
          onClose={() => {
            setShowPatientModal(false);
            setSelectedPatient(null);
          }} 
        />
      )}

      {showBookingModal && (
        <BookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
}

export default App;