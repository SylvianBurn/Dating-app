namespace API.Interfaces
{
    public interface IPhotoInterface
    {
        Task<string> GetMainPhotoForUserById(int id);
    }
}