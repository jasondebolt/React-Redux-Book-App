// Any file in our project can just import this file
// and it will automatically receive this books reducer.
export default function() {
  return [
    { title: 'Javascript: The Good Parts', pages: 101 },
    { title: 'Consider Phlebas', pages: 500 },
    { title: 'Learn Python The Hard Way ', pages: 88},
    { title: 'The Art of Computer Programming ', pages: 9000},
  ]
}
