export function normalizeExercise(exercise = {}, index = 0) {
  return {
    ...exercise,
    uid: exercise.uid || `${exercise.exerciseId || "exercise"}-${Date.now()}-${index}`,
    exerciseId: exercise.exerciseId || exercise.id || "unknown",
    name: exercise.name || "Exercise",
    category: exercise.category || "Other",
    sets: Number(exercise.sets || 3),
    reps: String(exercise.reps ?? "10"),
    weight: Number(exercise.weight || 0),
    rpe: Number(exercise.rpe || 8),
    tempo: exercise.tempo || "2-0-1",
    rest: Number(exercise.rest || 90),
    notes: exercise.notes || ""
  };
}

export function normalizeProgram(program = {}, fallbackId = "") {
  const now = Date.now();
  const id = program.id || fallbackId || `program-${now}`;
  const sourceDays = Array.isArray(program.days) ? program.days : [];
  const days = sourceDays.map((day, dayIndex) => ({
    ...day,
    id: day?.id || `day-${now}-${dayIndex}`,
    name: day?.name || `Day ${dayIndex + 1}`,
    exercises: (Array.isArray(day?.exercises) ? day.exercises : [])
      .filter(Boolean)
      .map((exercise, exerciseIndex) => normalizeExercise(exercise, exerciseIndex))
  }));

  if (!days.length) {
    days.push({ id: `day-${now}`, name: "Day 1", exercises: [] });
  }

  return {
    ...program,
    id,
    name: program.name || "New Program",
    goal: program.goal || "General Fitness",
    level: program.level || "Beginner",
    status: program.status || "draft",
    createdAt: Number(program.createdAt || now),
    updatedAt: Number(program.updatedAt || now),
    days
  };
}

export function normalizeProgramMap(source) {
  return Object.fromEntries(
    Object.entries(source || {})
      .filter(([, value]) => Boolean(value))
      .map(([id, value]) => [id, normalizeProgram(value, id)])
  );
}
