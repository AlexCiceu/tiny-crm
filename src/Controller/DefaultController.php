<?php
    
namespace App\Controller;
    
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Books;
use App\Entity\Reviews;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
    
class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');

    }

    /**
     * @Route("/api/retrieve_books/{id}", name="retrieve_books")
     */
    public function retrieveBooks($id){
        $books = $this->getDoctrine()
                    ->getRepository(Books::class)
                    ->find($id);
            if(!$books){
                throw $this->createNotFoundException(
                    'No books found for id '.$id
                );
            }
        return new Response('The book is '.$books->getName().' and 
        has this description: '.$books->getDescription());
    }

    /**
     * @Route("/api/insert_books", name="insert_books")
     */
    public function insertBooks(Request $request): Response{

        $entityManager = $this->getDoctrine()->getManager();

        $books = new Books();
        $books->setName($request->request->get('name'));
        $books->setAuthor($request->request->get('author'));
        $books->setDescription($request->request->get('description'));
        $books->setImageURL($request->request->get('imageURL'));

        $entityManager->persist($books);
        $entityManager->flush();

        return new Response('Saved the book '.$books->getName());
    }

    /**
     * @Route("/api/books", name="books")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getBooks(){
        $books = $this->getDoctrine()
                        ->getRepository(Books::class)
                        ->findAll();

        $response = new Response();

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($serializer->serialize($books, 'json'));
        
        return $response;
    }

    /**
     * @Route("/api/post_review", name="post_review")
     */
    public function postReview(Request $request): Response{

        $entityManager = $this->getDoctrine()->getManager();

        $review = new Reviews();
        $review->setTitle($request->request->get('title'));
        $review->setBody($request->request->get('body'));

        $entityManager->persist($review);
        $entityManager->flush();

        return new Response('Saved the review '.$review->getTitle());
    }

    /**
     * @Route("/api/reviews", name="reviews")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getReviews(){
        $reviews = $this->getDoctrine()
                        ->getRepository(Reviews::class)
                        ->findAll();

        $response = new Response();

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($serializer->serialize($reviews, 'json'));
        
        return $response;
    }
}