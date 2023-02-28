namespace Advanced_To_DoList.Core.Utilities.Results
{ 

    public interface IResult
    {

        bool Success { get; }
        string Message { get; }
    }
}