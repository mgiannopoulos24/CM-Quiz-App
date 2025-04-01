import QuizCard from './components/QuizCard';
import { quizzes } from './data/quizzes';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold text-gray-800">Κουίζ Μαθηματικών Πληροφορικής</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="font-bold text-gray-700">
            ΠΡΟΣΟΧΗ. Μερικές από τις εξηγήσεις είναι ΑΙ-generated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
