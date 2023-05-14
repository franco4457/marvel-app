export default function SearchInput() {
  return (
    <div>
      <label htmlFor="searchname">
        Search character
        <input
          type="text"
          name="searchname"
          placeholder="Iron-man"
          className="text-slate-900"
        />
      </label>
    </div>
  )
}
