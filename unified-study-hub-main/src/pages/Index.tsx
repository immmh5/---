import { useState, useEffect, useCallback } from "react";
import { chapters, getTotalLessons, SITE_TITLE, SITE_SUBTITLE } from "@/data/physicsData";
import type { Chapter, Lesson } from "@/data/physicsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun, Home, ArrowRight, RotateCcw, CheckCircle2, XCircle, BookOpen, ChevronLeft } from "lucide-react";

type Page = "home" | "chapter" | "lesson";

const Index = () => {
  const [page, setPage] = useState<Page>("home");
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("physics-dark") === "true";
    }
    return false;
  });
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("physics-completed") || "[]");
    } catch { return []; }
  });
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("physics-dark", String(dark));
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("physics-completed", JSON.stringify(completedLessons));
  }, [completedLessons]);

  const totalLessons = getTotalLessons();
  const progressPercent = Math.round((completedLessons.length / totalLessons) * 100);

  const toggleComplete = useCallback((lessonId: string) => {
    setCompletedLessons(prev =>
      prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
    );
  }, []);

  const resetProgress = useCallback(() => {
    setCompletedLessons([]);
    localStorage.removeItem("physics-completed");
  }, []);

  const openChapter = (ch: Chapter) => { setSelectedChapter(ch); setPage("chapter"); window.scrollTo(0, 0); };
  const openLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson); setPage("lesson"); setQuizAnswers({}); setQuizSubmitted(false); setRevealedAnswers({});
    window.scrollTo(0, 0);
  };
  const goHome = () => { setPage("home"); window.scrollTo(0, 0); };
  const goChapter = () => { setPage("chapter"); window.scrollTo(0, 0); };

  // ─── Header ───────────────────────────────────────────────
  const Header = () => (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚛️</span>
          <div>
            <h1 className="text-lg font-bold leading-tight cursor-pointer" onClick={goHome}>{SITE_TITLE}</h1>
            <p className="text-xs opacity-80">{SITE_SUBTITLE}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {page !== "home" && (
            <Button variant="ghost" size="icon" onClick={goHome} className="text-primary-foreground hover:bg-primary-foreground/20">
              <Home className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} className="text-primary-foreground hover:bg-primary-foreground/20">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );

  // ─── Progress Panel ───────────────────────────────────────
  const ProgressPanel = () => (
    <Card className="mb-8 border-primary/20">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">تقدمك الدراسي</span>
          </div>
          <Button variant="ghost" size="sm" onClick={resetProgress} className="text-muted-foreground hover:text-destructive text-xs gap-1">
            <RotateCcw className="h-3 w-3" /> إعادة تعيين
          </Button>
        </div>
        <Progress value={progressPercent} className="h-3 mb-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{completedLessons.length} من {totalLessons} درس مكتمل</span>
          <span className="font-bold text-primary">{progressPercent}%</span>
        </div>
      </CardContent>
    </Card>
  );

  // ─── Home Page ────────────────────────────────────────────
  const HomePage = () => (
    <main className="container mx-auto px-4 py-6 max-w-5xl">
      <ProgressPanel />
      <h2 className="text-2xl font-bold mb-6 text-foreground">📚 الفصول الدراسية</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map(ch => {
          const done = ch.lessons.filter(l => completedLessons.includes(l.id)).length;
          const total = ch.lessons.length;
          return (
            <Card
              key={ch.id}
              className="cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-0"
              onClick={() => openChapter(ch)}
            >
              <div className={`bg-gradient-to-br ${ch.gradient} p-5 text-white`}>
                <div className="text-3xl mb-2">{ch.icon}</div>
                <h3 className="font-bold text-lg">الفصل {ch.id}</h3>
                <p className="font-bold text-sm opacity-90">{ch.title}</p>
                <p className="text-xs opacity-70 mt-1">{ch.titleEn}</p>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-3">{ch.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{total} دروس</span>
                  <span className="font-bold text-primary">{done}/{total} مكتمل</span>
                </div>
                <Progress value={(done / total) * 100} className="h-1.5 mt-2" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );

  // ─── Chapter Page ─────────────────────────────────────────
  const ChapterPage = () => {
    if (!selectedChapter) return null;
    const ch = selectedChapter;
    return (
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <Button variant="ghost" onClick={goHome} className="mb-4 gap-2 text-muted-foreground">
          <ArrowRight className="h-4 w-4" /> العودة للرئيسية
        </Button>
        <div className={`bg-gradient-to-br ${ch.gradient} rounded-2xl p-6 text-white mb-6`}>
          <span className="text-4xl">{ch.icon}</span>
          <h2 className="text-2xl font-bold mt-2">الفصل {ch.id}: {ch.title}</h2>
          <p className="opacity-80 text-sm">{ch.titleEn}</p>
        </div>
        <div className="space-y-3">
          {ch.lessons.map((lesson, idx) => {
            const done = completedLessons.includes(lesson.id);
            return (
              <Card
                key={lesson.id}
                className={`cursor-pointer hover:shadow-lg transition-all ${done ? "border-green-500/30 bg-green-500/5" : ""}`}
                onClick={() => openLesson(lesson)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${done ? "bg-green-500 text-white" : "bg-primary/10 text-primary"}`}>
                      {done ? <CheckCircle2 className="h-5 w-5" /> : idx + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground">{lesson.id} - {lesson.title}</h3>
                    </div>
                  </div>
                  <ChevronLeft className="h-5 w-5 text-muted-foreground" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    );
  };

  // ─── Lesson Page ──────────────────────────────────────────
  const LessonPage = () => {
    if (!selectedLesson || !selectedChapter) return null;
    const lesson = selectedLesson;
    const done = completedLessons.includes(lesson.id);

    const handleQuizSelect = (qIdx: number, optIdx: number) => {
      if (quizSubmitted) return;
      setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
    };

    const submitQuiz = () => setQuizSubmitted(true);

    const quizScore = lesson.quiz.reduce((s, q, i) => s + (quizAnswers[i] === q.correct ? 1 : 0), 0);

    return (
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <Button variant="ghost" onClick={goChapter} className="mb-4 gap-2 text-muted-foreground">
          <ArrowRight className="h-4 w-4" /> العودة للفصل {selectedChapter.id}
        </Button>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">الفصل {selectedChapter.id}</p>
            <h2 className="text-2xl font-bold text-foreground">{lesson.id} - {lesson.title}</h2>
          </div>
          <Button
            variant={done ? "default" : "outline"}
            size="sm"
            onClick={() => toggleComplete(lesson.id)}
            className={`gap-1 ${done ? "bg-green-600 hover:bg-green-700" : ""}`}
          >
            <CheckCircle2 className="h-4 w-4" />
            {done ? "مكتمل ✓" : "تحديد كمكتمل"}
          </Button>
        </div>

        <Tabs defaultValue="explanation" dir="rtl">
          <TabsList className="w-full grid grid-cols-4 mb-4">
            <TabsTrigger value="explanation">📖 الشرح</TabsTrigger>
            <TabsTrigger value="summary">📝 الملخص</TabsTrigger>
            <TabsTrigger value="questions">❓ أسئلة</TabsTrigger>
            <TabsTrigger value="quiz">📝 اختبار</TabsTrigger>
          </TabsList>

          <TabsContent value="explanation">
            <Card>
              <CardContent className="p-6 lesson-content" dangerouslySetInnerHTML={{ __html: lesson.explanation }} />
            </Card>
            {lesson.applications && (
              <Card className="mt-4">
                <CardContent className="p-6 lesson-content" dangerouslySetInnerHTML={{ __html: lesson.applications }} />
              </Card>
            )}
          </TabsContent>

          <TabsContent value="summary">
            <Card>
              <CardContent className="p-6 lesson-content" dangerouslySetInnerHTML={{ __html: lesson.summary }} />
            </Card>
          </TabsContent>

          <TabsContent value="questions">
            <div className="space-y-4">
              {lesson.questions.map((q, i) => (
                <Card key={i}>
                  <CardContent className="p-5">
                    <p className="font-bold mb-3 text-foreground">❓ {q.question}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setRevealedAnswers(prev => ({ ...prev, [i]: !prev[i] }))}
                      className="mb-3"
                    >
                      {revealedAnswers[i] ? "إخفاء الإجابة" : "عرض الإجابة"}
                    </Button>
                    {revealedAnswers[i] && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-sm">
                        <p className="text-foreground">{q.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
              {lesson.questions.length === 0 && (
                <Card><CardContent className="p-6 text-center text-muted-foreground">لا توجد أسئلة لهذا الدرس حالياً</CardContent></Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="quiz">
            <div className="space-y-4">
              {lesson.quiz.map((q, i) => (
                <Card key={i} className={quizSubmitted ? (quizAnswers[i] === q.correct ? "border-green-500/50" : "border-destructive/50") : ""}>
                  <CardContent className="p-5">
                    <p className="font-bold mb-3">{i + 1}. {q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, j) => {
                        let cls = "w-full text-right justify-start px-4 py-2.5 h-auto";
                        if (quizSubmitted) {
                          if (j === q.correct) cls += " bg-green-500/20 border-green-500 text-green-700 dark:text-green-400";
                          else if (j === quizAnswers[i]) cls += " bg-destructive/20 border-destructive text-destructive";
                        } else if (quizAnswers[i] === j) {
                          cls += " bg-primary/10 border-primary";
                        }
                        return (
                          <Button key={j} variant="outline" className={cls} onClick={() => handleQuizSelect(i, j)}>
                            <span className="ml-2 w-6 h-6 rounded-full border flex items-center justify-center text-xs shrink-0">
                              {String.fromCharCode(1571 + j)}
                            </span>
                            {opt}
                            {quizSubmitted && j === q.correct && <CheckCircle2 className="h-4 w-4 mr-auto text-green-600" />}
                            {quizSubmitted && j === quizAnswers[i] && j !== q.correct && <XCircle className="h-4 w-4 mr-auto text-destructive" />}
                          </Button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {lesson.quiz.length > 0 && !quizSubmitted && (
                <Button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < lesson.quiz.length} className="w-full">
                  تسليم الاختبار
                </Button>
              )}

              {quizSubmitted && (
                <Card className="border-primary/30">
                  <CardContent className="p-6 text-center">
                    <p className="text-2xl font-bold mb-2">
                      {quizScore === lesson.quiz.length ? "🎉 ممتاز!" : quizScore >= lesson.quiz.length * 0.7 ? "👏 جيد جداً!" : "📚 حاول مرة أخرى"}
                    </p>
                    <p className="text-lg">نتيجتك: <span className="font-bold text-primary">{quizScore}/{lesson.quiz.length}</span></p>
                    <Button variant="outline" className="mt-4" onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); }}>
                      <RotateCcw className="h-4 w-4 ml-2" /> إعادة المحاولة
                    </Button>
                  </CardContent>
                </Card>
              )}

              {lesson.quiz.length === 0 && (
                <Card><CardContent className="p-6 text-center text-muted-foreground">لا يوجد اختبار لهذا الدرس حالياً</CardContent></Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {page === "home" && <HomePage />}
      {page === "chapter" && <ChapterPage />}
      {page === "lesson" && <LessonPage />}
      <footer className="text-center py-6 text-sm text-muted-foreground border-t border-border mt-8">
        <p>⚛️ {SITE_TITLE} - {SITE_SUBTITLE}</p>
        <p className="mt-1">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
