import { useState } from "react";
import { formatDate } from "../../utilities/formatDate";

interface Icomment {
  text: string;
  parentId?: number | null;
  id: number;
  date: Date;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Icomment[]>([]);
  const [commentText, setComment] = useState<string>("");
  const [parentId, setParentId] = useState<number | null>(null);
  const [replies, setReplies] = useState<Icomment[]>([]);
  const [showRepliesOfId, setShowRepliesOfId] = useState<number | null>(null);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date();

    setComments((prev) => [
      ...prev,
      {
        text: commentText,
        date: currentDate,
        id: currentDate.getTime(),
        parentId,
      },
    ]);

    setComment("");
  };

  const handleShowReplies = (e: React.FormEvent, parentId: number) => {
    e.preventDefault();

    const currentReplies = comments.filter(
      (comment) => comment.parentId === parentId
    );
    setReplies(currentReplies);
  };

  const toggleHandleShowReplies = (e: React.FormEvent, parentId: number) => {
    e.preventDefault();

    if (showRepliesOfId === null || showRepliesOfId !== parentId) {
      setShowRepliesOfId(parentId);
    } else {
      setShowRepliesOfId(null);
    }
  };

  return (
    <div className="p-5">
      {/* Heading section */}
      <div className=" bg-blue-300  w-full p-5">
        <p className="font-extrabold text-center text-lg">Comment Section</p>
      </div>

      {/* Comment input section */}
      <div className="py-5 w-full ">
        {!parentId && (
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText || ""}
              name="comment-text"
              id="comment-text"
              className="border-2 w-56 h-10 rounded-md p-2"
              onChange={(e) => {
                e.stopPropagation();
                setParentId(null);
                setComment(e.target.value);
              }}
            ></input>
            <button
              type="submit"
              className="bg-green-400 h-10 rounded-md p-2 ml-2"
            >
              send
            </button>
          </form>
        )}
      </div>

      {/* Comment section */}
      <div className="pl-10 pt-5">
        {comments.length > 0 ? (
          <div>
            {comments
              .filter((comment) => comment.parentId === null)
              .map((comment: Icomment, index) => (
                <div key={index} className=" pb-2 border-b-1 w-[50%]">
                  <div className="flex justify-between pb-2">
                    <p className="font-mono text-amber-800">{comment.text}</p>
                    <p className="font-extralight">
                      {formatDate(comment.date)}
                    </p>
                  </div>
                  <div>
                    <div>
                      <button
                        className="bg-green-200 px-2 rounded-md "
                        onClick={(e) => {
                          e.stopPropagation();
                          setParentId(comment.id);
                        }}
                      >
                        reply
                      </button>

                      <button
                        className="bg-blue-200 px-2 rounded-md ml-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowReplies(e, comment.id);
                          toggleHandleShowReplies(e, comment.id);
                        }}
                      >
                        show Replies
                      </button>
                    </div>
                    {parentId === comment.id && (
                      <div className="pl-10 pt-5">
                        {replies.length > 0 ? (
                          <div>
                            {replies.map((comment: Icomment, index) => (
                              <div
                                key={index}
                                className=" pb-2 border-b-1 w-[50%]"
                              >
                                <div className="flex justify-between pb-2">
                                  <p className="font-mono text-amber-800">
                                    {comment.text}
                                  </p>
                                  <p className="font-extralight">
                                    {formatDate(comment.date)}
                                  </p>
                                </div>
                                <div>
                                  <div>
                                    <button
                                      className="bg-green-200 px-2 rounded-md "
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setParentId(comment.id);
                                      }}
                                    >
                                      reply
                                    </button>

                                    <button
                                      className="bg-blue-200 px-2 rounded-md ml-2"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleShowReplies(e, comment.id);
                                      }}
                                    >
                                      show Replies
                                    </button>
                                  </div>
                                  {parentId === comment.id && (
                                    <form
                                      onSubmit={handleCommentSubmit}
                                      className="pt-4"
                                    >
                                      <input
                                        type="text"
                                        value={commentText || ""}
                                        name="comment-text"
                                        id="comment-text"
                                        className="border-2 w-56 h-10 rounded-md p-2"
                                        onChange={(e) => {
                                          e.stopPropagation();
                                          setComment(e.target.value);
                                        }}
                                      ></input>
                                      <button
                                        type="submit"
                                        className="bg-green-400 h-10 rounded-md p-2 ml-2"
                                      >
                                        send
                                      </button>
                                      <button
                                        className="bg-red-200 p-2 rounded-md ml-2"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setParentId(null);
                                        }}
                                      >
                                        cancel
                                      </button>
                                    </form>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div>There is no comment.</div>
                        )}
                      </div>
                    )}
                    {parentId === comment.id && (
                      <form onSubmit={handleCommentSubmit} className="pt-4">
                        <input
                          type="text"
                          value={commentText || ""}
                          name="comment-text"
                          id="comment-text"
                          className="border-2 w-56 h-10 rounded-md p-2"
                          onChange={(e) => {
                            e.stopPropagation();
                            setComment(e.target.value);
                          }}
                        ></input>
                        <button
                          type="submit"
                          className="bg-green-400 h-10 rounded-md p-2 ml-2"
                        >
                          send
                        </button>
                        <button
                          className="bg-red-200 p-2 rounded-md ml-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setParentId(null);
                          }}
                        >
                          cancel
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div>There is no comment.</div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
