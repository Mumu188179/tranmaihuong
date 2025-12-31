import { Award, Lightbulb, Shield, Target } from "lucide-react";
import Layout from "@/components/Layout";

const Conclusion = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h1 className="section-title text-4xl md:text-5xl">
              Tổng kết Portfolio
            </h1>
            <p className="section-subtitle mx-auto mt-4">
              Nhìn lại hành trình học tập và những bài học kinh nghiệm quý giá.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Personal Experience */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 card-hover animate-slide-up">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  📚
                </span>
                1. Trải nghiệm và quá trình thực hiện Portfolio
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed">
                  Dự án Portfolio cá nhân là một trải nghiệm học tập có ý nghĩa đối với tôi trong học phần 
                  Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo. Thông qua việc thực hiện từng bài tập 
                  và tích hợp chúng vào một sản phẩm hoàn chỉnh, tôi có cơ hội nhìn lại toàn bộ quá trình 
                  học tập của bản thân một cách hệ thống và rõ ràng hơn. Portfolio không chỉ là nơi lưu trữ 
                  bài tập mà còn phản ánh sự tiến bộ của tôi trong việc tiếp cận và sử dụng các công cụ công nghệ số.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Skills Acquired */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 card-hover animate-slide-up">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </span>
                2. Kiến thức và kỹ năng đạt được
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed">
                  Sau khi hoàn thành dự án, tôi đã tích lũy được nhiều kiến thức và kỹ năng quan trọng, 
                  bao gồm: kỹ năng quản lý và tổ chức dữ liệu số; kỹ năng tìm kiếm, đánh giá và sử dụng 
                  thông tin học thuật từ các nguồn đáng tin cậy; kỹ năng viết prompt hiệu quả để khai thác 
                  AI phục vụ học tập; cũng như khả năng sử dụng các công cụ hợp tác trực tuyến và công cụ 
                  sáng tạo nội dung số. Những kỹ năng này không chỉ phục vụ cho môn học mà còn có giá trị 
                  lâu dài trong quá trình học tập đại học.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: AI Responsibility */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 card-hover animate-slide-up">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </span>
                3. Nhận thức về việc sử dụng AI có trách nhiệm
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed">
                  Một trong những bài học quan trọng nhất mà tôi rút ra được từ dự án này là nhận thức 
                  về vai trò và giới hạn của trí tuệ nhân tạo trong học tập. Tôi hiểu rằng AI là công cụ 
                  hỗ trợ, không thể thay thế hoàn toàn tư duy và nỗ lực cá nhân. Việc sử dụng AI cần đi 
                  kèm với tinh thần tự học, kiểm chứng thông tin và tuân thủ các nguyên tắc liêm chính 
                  học thuật nhằm tránh các hành vi gian lận hoặc lệ thuộc quá mức vào công nghệ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Challenges & Future */}
      <section className="py-12 pb-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 card-hover animate-slide-up">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </span>
                4. Khó khăn, bài học và định hướng trong tương lai
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed">
                  Trong quá trình thực hiện Portfolio, tôi gặp một số khó khăn ban đầu như chưa quen với 
                  việc sử dụng các nền tảng số và cách trình bày nội dung một cách khoa học. Tuy nhiên, 
                  thông qua việc tự tìm hiểu và điều chỉnh, tôi dần cải thiện được kỹ năng của mình. 
                  Trong tương lai, tôi mong muốn tiếp tục phát triển Portfolio như một công cụ theo dõi 
                  quá trình học tập, đồng thời nâng cao khả năng ứng dụng công nghệ và AI một cách hiệu quả, 
                  có trách nhiệm và phù hợp với yêu cầu học thuật.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conclusion;
