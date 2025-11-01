import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface TheoryTopic {
  id: string;
  title: string;
  titleEn: string;
  content: string[];
  keyPoints: string[];
}

const theoryTopics: TheoryTopic[] = [
  {
    id: 'hanghoa',
    title: 'Hàng Hóa và Giá Trị',
    titleEn: 'Commodities and Value',
    content: [
      'Hàng hóa là sản phẩm lao động được sản xuất ra để trao đổi, mua bán. Hàng hóa có hai thuộc tính cơ bản: giá trị sử dụng và giá trị.',
      'Giá trị sử dụng là tính hữu ích của hàng hóa, khả năng thỏa mãn nhu cầu nào đó của con người. Giá trị sử dụng là nội dung vật chất của sự giàu có.',
      'Giá trị là lao động xã hội kết tinh trong hàng hóa. Giá trị được đo bằng thời gian lao động xã hội cần thiết để sản xuất ra hàng hóa đó.',
      'Lao động sản xuất hàng hóa có tính hai mặt: lao động cụ thể và lao động trừu tượng. Lao động cụ thể tạo ra giá trị sử dụng, lao động trừu tượng tạo ra giá trị.'
    ],
    keyPoints: [
      'Hàng hóa = Giá trị sử dụng + Giá trị',
      'Giá trị được xác định bởi lao động xã hội cần thiết',
      'Lao động cụ thể ≠ Lao động trừu tượng',
      'Giá trị là cơ sở của giá cả'
    ]
  },
  {
    id: 'tiente',
    title: 'Tiền Tệ và Chức Năng',
    titleEn: 'Currency and Functions',
    content: [
      'Tiền tệ là hàng hóa đặc biệt, được tách ra khỏi thế giới hàng hóa để làm vật ngang giá chung. Tiền tệ là sản phẩm tất yếu của sự phát triển sản xuất hàng hóa và trao đổi hàng hóa.',
      'Bản chất của tiền tệ là biểu hiện quan hệ sản xuất giữa những người sản xuất hàng hóa thông qua vật.',
      'Tiền tệ có 5 chức năng cơ bản: thước đo giá trị, phương tiện lưu thông, phương tiện tích trữ, phương tiện thanh toán, và tiền tệ thế giới.',
      'Trong nền kinh tế hiện đại, tiền tệ phát triển thành tiền giấy, tiền tín dụng và tiền điện tử, nhưng bản chất vẫn là biểu hiện quan hệ xã hội.'
    ],
    keyPoints: [
      'Tiền tệ = Hàng hóa đặc biệt làm vật ngang giá chung',
      '5 chức năng: Đo lường, Lưu thông, Tích trữ, Thanh toán, Thế giới',
      'Tiền tệ biểu hiện quan hệ sản xuất xã hội',
      'Hình thái tiền tệ phát triển theo thời gian'
    ]
  },
  {
    id: 'thitruong',
    title: 'Thị Trường và Cơ Chế Thị Trường',
    titleEn: 'Market and Market Mechanism',
    content: [
      'Thị trường là nơi diễn ra các quan hệ trao đổi, mua bán hàng hóa giữa người mua và người bán. Thị trường bao gồm cả không gian vật chất và quan hệ kinh tế.',
      'Cơ chế thị trường là sự tác động qua lại giữa các yếu tố cơ bản: cung, cầu và giá cả. Cung cầu quyết định giá cả, và giá cả điều tiết cung cầu.',
      'Thị trường có nhiều loại: thị trường hàng hóa dịch vụ, thị trường lao động, thị trường vốn, thị trường bất động sản, và các thị trường khác.',
      'Vai trò của thị trường: phân bổ nguồn lực, thúc đẩy cạnh tranh, điều tiết sản xuất kinh doanh, tạo động lực phát triển kinh tế.'
    ],
    keyPoints: [
      'Thị trường = Nơi diễn ra trao đổi mua bán',
      'Cơ chế: Cung ⇄ Cầu ⇄ Giá cả',
      'Nhiều loại thị trường khác nhau',
      'Phân bổ nguồn lực và thúc đẩy phát triển'
    ]
  },
  {
    id: 'quyluatkinhte',
    title: 'Quy Luật Kinh Tế của Sản Xuất Hàng Hóa',
    titleEn: 'Economic Laws of Commodity Production',
    content: [
      'Quy luật giá trị: Hàng hóa trao đổi theo nguyên tắc có đổi có, bằng giá trị với bằng giá trị. Cơ sở của quy luật là lao động xã hội cần thiết.',
      'Quy luật cung cầu: Mối quan hệ giữa cung và cầu quyết định giá cả thị trường. Khi cầu lớn hơn cung, giá tăng; khi cung lớn hơn cầu, giá giảm.',
      'Quy luật cạnh tranh: Các nhà sản xuất hàng hóa cạnh tranh với nhau để giành thị trường. Cạnh tranh thúc đẩy cải tiến kỹ thuật, nâng cao năng suất lao động.',
      'Những quy luật này tác động khách quan, không phụ thuộc vào ý chí con người. Nhận thức và vận dụng đúng các quy luật sẽ đạt hiệu quả kinh tế cao.'
    ],
    keyPoints: [
      'Quy luật giá trị: Trao đổi theo giá trị lao động',
      'Quy luật cung cầu: Điều tiết giá cả thị trường',
      'Quy luật cạnh tranh: Thúc đẩy cải tiến',
      'Các quy luật tác động khách quan'
    ]
  },
  {
    id: 'giatrithanhdư',
    title: 'Giá Trị Thặng Dư',
    titleEn: 'Surplus Value',
    content: [
      'Giá trị thặng dư là phần giá trị mới do công nhân làm thuê tạo ra vượt quá giá trị sức lao động của họ mà bị nhà tư bản chiếm đoạt không công.',
      'Công thức: M = C + V + M, trong đó C là tư bản bất biến, V là tư bản khả biến, M là giá trị thặng dư.',
      'Có hai hình thức tăng giá trị thặng dư: giá trị thặng dư tuyệt đối (kéo dài thời gian lao động) và giá trị thặng dư tương đối (tăng năng suất lao động).',
      'Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, cần điều tiết hợp lý lợi nhuận, đảm bảo quyền lợi người lao động, phân phối công bằng.'
    ],
    keyPoints: [
      'Giá trị thặng dư = Giá trị mới - Giá trị sức lao động',
      'M = C + V + M',
      'Hai loại: Tuyệt đối và Tương đối',
      'Cần phân phối công bằng trong CNXH'
    ]
  },
  {
    id: 'ungdung',
    title: 'Ứng Dụng Vào Thực Tiễn Việt Nam',
    titleEn: 'Application to Vietnam Context',
    content: [
      'Việt Nam xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa, kết hợp kinh tế thị trường với chủ nghĩa xã hội.',
      'Nhà nước đóng vai trò định hướng, điều tiết vĩ mô, tạo môi trường pháp lý, đảm bảo công bằng xã hội và bảo vệ môi trường.',
      'Phát triển đa dạng các thành phần kinh tế: kinh tế nhà nước, kinh tế tập thể, kinh tế tư nhân, kinh tế có vốn đầu tư nước ngoài.',
      'Mục tiêu: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh. Phát triển kinh tế gắn với tiến bộ và công bằng xã hội, bảo vệ môi trường.'
    ],
    keyPoints: [
      'KTTT định hướng XHCN',
      'Nhà nước định hướng và điều tiết',
      'Đa dạng thành phần kinh tế',
      'Mục tiêu: Giàu - Mạnh - Dân chủ - Công bằng'
    ]
  }
]

interface Props {
  highlightTopicId?: string | null;
}

export default function TheoryContent({ highlightTopicId }: Props) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(theoryTopics[0].id);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (highlightTopicId) {
      setExpandedTopic(highlightTopicId);
      const el = refs.current[highlightTopicId];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [highlightTopicId]);

  const toggleTopic = (id: string) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white/80 to-yellow-50 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
        <div className="flex items-start space-x-4">
          <BookOpen className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Lý Thuyết Kinh Tế Chính Trị Mác - Lênin</h2>
            <p className="text-gray-600 leading-relaxed">Trang bị kiến thức cốt lõi về hàng hóa, tiền tệ, thị trường, các quy luật kinh tế và giá trị thặng dư.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {theoryTopics.map((topic) => (
          <div key={topic.id} ref={(el) => (refs.current[topic.id] = el)} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <button onClick={() => toggleTopic(topic.id)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors" type="button">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{topic.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{topic.titleEn}</p>
              </div>
              {expandedTopic === topic.id ? (
                <ChevronUp className="w-6 h-6 text-red-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
              )}
            </button>

            {expandedTopic === topic.id && (
              <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Nội dung chi tiết:</h4>
                    <div className="space-y-3">
                      {topic.content.map((paragraph) => (
                        <p key={paragraph} className="text-gray-600 leading-relaxed pl-4 border-l-2 border-red-200">{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-red-800 mb-3">Điểm chính cần nhớ:</h4>
                    <ul className="space-y-2">
                      {topic.keyPoints.map((point) => (
                        <li key={point} className="flex items-start space-x-2">
                          <span className="text-red-600 font-bold flex-shrink-0">•</span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Mục Tiêu Học Tập</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Kiến thức</h4>
            <p className="text-sm text-red-50">Hiểu sâu về hàng hóa, tiền tệ, thị trường, quy luật kinh tế và giá trị thặng dư</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Kỹ năng</h4>
            <p className="text-sm text-red-50">Tư duy phản biện, lập luận, thuyết trình, ứng dụng AI, làm việc nhóm</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Thái độ</h4>
            <p className="text-sm text-red-50">Củng cố niềm tin vào Đảng, Nhà nước, tinh thần trách nhiệm xã hội</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Ứng dụng</h4>
            <p className="text-sm text-red-50">Vận dụng vào thực tiễn phát triển kinh tế - xã hội Việt Nam</p>
          </div>
        </div>
      </div>
    </div>
  )
}
