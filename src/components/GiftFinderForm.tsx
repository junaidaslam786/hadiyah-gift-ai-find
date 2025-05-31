import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FormData {
  occasion: string;
  ageGroup: string;
  gender: string;
  relationship: string;
  interests: string;
  budget: string;
}

interface GiftFinderFormProps {
  onSubmit: (data: FormData) => void;
}

const GiftFinderForm: React.FC<GiftFinderFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    occasion: '',
    ageGroup: '',
    gender: '',
    relationship: '',
    interests: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every(value => value)) {
      onSubmit(formData);
    }
  };

  const isFormValid = Object.values(formData).every(value => value);

  return (
    <section id="gift-finder" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ابحث عن هديتك المثالية
          </h2>
          <p className="text-xl text-gray-600">
            أجب على الأسئلة التالية وسنجد لك أفضل الهدايا
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 shadow-xl border-tiffany-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* نوع المناسبة */}
              <div className="space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  نوع المناسبة
                </label>
                <Select value={formData.occasion} onValueChange={(value) => setFormData({...formData, occasion: value})}>
                  <SelectTrigger className="h-12 text-lg border-2 focus:border-tiffany-500">
                    <SelectValue placeholder="اختر المناسبة" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="عيد ميلاد">عيد ميلاد</SelectItem>
                    <SelectItem value="تخرج">تخرج</SelectItem>
                    <SelectItem value="زواج">زواج</SelectItem>
                    <SelectItem value="ذكرى سنوية">ذكرى سنوية</SelectItem>
                    <SelectItem value="عطلة/عيد">عطلة/عيد</SelectItem>
                    <SelectItem value="إنجاز">إنجاز</SelectItem>
                    <SelectItem value="مناسبة أخرى">مناسبة أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* الفئة العمرية */}
              <div className="space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  الفئة العمرية
                </label>
                <Select value={formData.ageGroup} onValueChange={(value) => setFormData({...formData, ageGroup: value})}>
                  <SelectTrigger className="h-12 text-lg border-2 focus:border-tiffany-500">
                    <SelectValue placeholder="اختر الفئة العمرية" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="طفل (0-12)">طفل (0-12)</SelectItem>
                    <SelectItem value="مراهق (13-17)">مراهق (13-17)</SelectItem>
                    <SelectItem value="شاب (18-30)">شاب (18-30)</SelectItem>
                    <SelectItem value="بالغ (31-50)">بالغ (31-50)</SelectItem>
                    <SelectItem value="كبير السن (+50)">كبير السن (+50)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* الجنس */}
              <div className="space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  الجنس
                </label>
                <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                  <SelectTrigger className="h-12 text-lg border-2 focus:border-tiffany-500">
                    <SelectValue placeholder="اختر الجنس" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="ذكر">ذكر</SelectItem>
                    <SelectItem value="أنثى">أنثى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* العلاقة */}
              <div className="space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  العلاقة
                </label>
                <Select value={formData.relationship} onValueChange={(value) => setFormData({...formData, relationship: value})}>
                  <SelectTrigger className="h-12 text-lg border-2 focus:border-tiffany-500">
                    <SelectValue placeholder="اختر العلاقة" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="زوج/زوجة">زوج/زوجة</SelectItem>
                    <SelectItem value="والد/والدة">والد/والدة</SelectItem>
                    <SelectItem value="أخ/أخت">أخ/أخت</SelectItem>
                    <SelectItem value="صديق/صديقة">صديق/صديقة</SelectItem>
                    <SelectItem value="زميل عمل">زميل عمل</SelectItem>
                    <SelectItem value="قريب">قريب</SelectItem>
                    <SelectItem value="آخر">آخر</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* الاهتمامات */}
              <div className="space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  الاهتمامات
                </label>
                <Select value={formData.interests} onValueChange={(value) => setFormData({...formData, interests: value})}>
                  <SelectTrigger className="h-12 text-lg border-2 focus:border-tiffany-500">
                    <SelectValue placeholder="اختر الاهتمامات" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="الموضة والأزياء">الموضة والأزياء</SelectItem>
                    <SelectItem value="التقنية">التقنية</SelectItem>
                    <SelectItem value="الطبخ">الطبخ</SelectItem>
                    <SelectItem value="الرياضة">الرياضة</SelectItem>
                    <SelectItem value="القراءة">القراءة</SelectItem>
                    <SelectItem value="السفر">السفر</SelectItem>
                    <SelectItem value="الفن والإبداع">الفن والإبداع</SelectItem>
                    <SelectItem value="الموسيقى">الموسيقى</SelectItem>
                    <SelectItem value="الجمال والعناية">الجمال والعناية</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* الميزانية */}
              <div className="space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  الميزانية
                </label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger className="h-12 text-lg border-2 focus:border-tiffany-500">
                    <SelectValue placeholder="اختر الميزانية" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="أقل من 100 ريال">أقل من 100 ريال</SelectItem>
                    <SelectItem value="من 100 إلى 300 ريال">من 100 إلى 300 ريال</SelectItem>
                    <SelectItem value="من 300 إلى 700 ريال">من 300 إلى 700 ريال</SelectItem>
                    <SelectItem value="أكثر من 700 ريال">أكثر من 700 ريال</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button 
                type="submit" 
                disabled={!isFormValid}
                className="bg-tiffany-500 hover:bg-tiffany-600 text-white text-xl px-12 py-4 rounded-xl tiffany-glow disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                ابحث عن الهدايا المناسبة
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default GiftFinderForm;
